import { useState, Fragment, useEffect } from "react";
import useAuth from "../../../../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { MdDelete, MdEdit } from "react-icons/md";
import PopModal from "../../../../../components/pop-up/PopModal";
import { format } from "date-fns";
import useEmployeeDet from "../../../../../hooks/useEmployeeDet";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";



const Task = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  const [startDate, setStartDate] = useState(new Date());
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [userData] = useEmployeeDet();

  // console.log(userData.isVerified)


  const { data: tasks = [], isLoading, refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/tasks/${user?.email}`);
      return res.data;
    },
  });

  const handleAddTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const employeeName = user?.displayName;
    const employeeEmail = user?.email;
    const task = form.task.value;
    const hoursWorked = parseInt(form.hoursWorked.value);
    const date = format(startDate, "dd-MM-yyyy, hh:mma");
    const status = "Processing";
    const taskData = { employeeName, employeeEmail, task, hoursWorked, date, status };

    if(!userData.isVerified){
      toast.warn('Please wait till HR verify you')
      return
    }

    try {
      const result = await axios.post(`${import.meta.env.VITE_API_URL}/add-task`, taskData);
      if (result.data.acknowledged) {
        refetch();
        toast.success("Added your task");
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {

    try{
      const result = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-task/${currentTask?._id}`);

      if(result){
        toast.success('Task Deleted');
        refetch();
        setIsDeleteModalOpen(false)
      }
    }catch(err){
      console.log(err)
    }
    
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    // console.log(currentTask?._id)
    const form = e.target;
    const updatedTask = form.task.value;
    const updatedHours = parseInt(form.hoursWorked.value);
    const newDate = format(startDate, "dd-MM-yyyy, hh:mma");

    const updateData={
      updatedTask,
      updatedHours,
      newDate
    }

    try{

      const result = await axios.put(`${import.meta.env.VITE_API_URL}/update-task/${currentTask?._id}`, updateData)
      if(result.data.acknowledged){
        toast.success('Task updated')
        setIsEditModalOpen(false)
        refetch();
      }

    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="mt-5 space-y-5">
      <div className="border p-5 rounded-lg flex flex-col gap-5">
        {/* Add Task */}
        <div className="bg-slate-100 py-10 p-5 rounded-md">
          <div className="flex flex-col gap-5 items-center py-[40px]">
            <h2 className="text-center text-4xl">Add task</h2>
            <form className="space-y-4 md:w-3/5" onSubmit={handleAddTask}>
              <div className="form-control">
                <select defaultValue="default" className="select select-bordered w-full" name="task">
                  <option disabled value="default">Task on</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Content">Content</option>
                  <option value="Paper-work">Paper-work</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <div className="form-control w-full">
                  <input type="text" name="hoursWorked" placeholder="Hours Worked" className="input input-bordered w-full px-4 py-2 border rounded-md" required />
                </div>
                <div className="form-control w-full">
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  className="select-bordered py-3 rounded-md w-full" />
                </div>
              </div>
              {
                 userData?.isVerified ? <button type="submit" className="btn2">Add task</button> :
                 <button type="submit" className="btn3">Add task</button> 
                
              }
              
            </form>
          </div>
        </div>

        {/* List Tasks */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Tasks</th>
                <th>Hours</th>
                <th>Date</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* // <TaskRow key={el?._id} el={el} idx={idx} /> */}
              
              {tasks.map((el, idx) => (
                <tr key={el?._id}>
                  <th>{idx + 1}</th>
                  <td>{el?.task}</td>
                  <td>{el?.hoursWorked}</td>
                  <td>{el?.date}</td>
                  <td>{el?.status}</td>
                  <td onClick={() => {setIsDeleteModalOpen(true); setCurrentTask(el)}} className="text-lg cursor-pointer">
                    <MdDelete />
                  </td>
                  <td onClick={() => { setCurrentTask(el); setIsEditModalOpen(true); }} className="text-lg cursor-pointer">
                    <MdEdit />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Modal */}
      <PopModal isOpen={isDeleteModalOpen} closeModal={() => setIsDeleteModalOpen(false)} title="Confirm Delete">
        <p>Are you sure you want to delete this task?</p>
        <button onClick={handleDelete} className="btn-danger mt-4 bg-red-300">Delete</button>
      </PopModal>

      {/* Edit Modal */}
      <PopModal isOpen={isEditModalOpen} closeModal={() => setIsEditModalOpen(false)} title="Edit Task">
        <form onSubmit={handleEdit} className="space-y-4">
          <div className="form-control">

            <select defaultValue={currentTask?.task}className="select select-bordered w-full" name="task">
                  <option disabled value="default">Task on</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Content">Content</option>
                  <option value="Paper-work">Paper-work</option>
              </select>
          </div>
          <div className="form-control">
            <input
              type="text"
              name="hoursWorked"
              defaultValue={currentTask?.hoursWorked}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="Pp"
              className="select-bordered py-3 rounded-md w-full"
            />
          </div>
          <button type="submit" className="btn2">Update Task</button>
        </form>
      </PopModal>
    </div>
  );
};

export default Task;
