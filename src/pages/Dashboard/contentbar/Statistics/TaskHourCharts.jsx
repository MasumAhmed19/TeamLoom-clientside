import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const TaskHourChart = ({ taskOverview }) => {

console.log(taskOverview)

  return (
    <div style={{ width: "100%", height: 250 }}>
      <h2 className="text-center text-xl font-semibold mb-4">Task Hours Overview</h2>
      <ResponsiveContainer>
        <BarChart
          data={taskOverview}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="taskName" // Matches the key from taskOverview
            label={{
              value: "Tasks",
              position: "insideBottom",
              offset: -5,
            }}
          />
          <YAxis
            label={{
              value: "Hours Worked",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Bar dataKey="totalHours" fill="#8A53F4" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskHourChart;
