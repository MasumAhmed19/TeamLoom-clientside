import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { imageUpload } from "../../api/utils";



const SignUp = () => {
  const {user, setUser, signInWithGoogle, createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [rolee, setRolee] = useState("employee");

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        navigate("/");
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const bank_account = form.bank_account.value;
    const role = form.role.value;
    const designation = form.designation.value;
    const salary = form.salary.value;
    const password = form.password.value;
    const profileFile = form.profileURL.files[0]; 
    const makeHR= role==='hr'; 
    const isFire= false
    const isVerified = role==='hr'

    try {
      const profileURL = await imageUpload(profileFile);  
      console.log(profileURL)

      const newUserData = {
        name,
        email,
        bank_account,
        role,
        designation,
        salary,
        profileURL,
        password,
        makeHR,
        isFire,
        isVerified
      };

      console.log(newUserData);

      const createUserRes = await createUser(email, password)

      try {
        await updateUserProfile(name, profileURL)
        console.log("User profile updated")

        const result = await axios.post(
          `${import.meta.env.VITE_API_URL}/add-user/${email}`,
          newUserData, { headers: { "Content-Type": "application/json" } }
        );

        console.log("User added to database:", result.data);
        navigate("/dashboard");
        toast.success("Successfully Signed Up");
      } catch (updateError) {
        console.error("Error updating user profile:", updateError);
      }
    } catch (imgError) {
      console.error("Error uploading image:", imgError);
      toast.error("Image upload failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-zinc-700 to-gray-900 p-5">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto gap-10">
        <div className="w-full">
          <div className="max-w-xl bg-white rounded-md shadow-lg p-8">
            <Link
              to=""
              className="flex items-center justify-center gap-2 py-5 cursor-default"
            >
              <img
                src="https://i.ibb.co.com/6H7FBtf/logo.png"
                alt="Logo"
                className="w-16"
              />
              <h3 className="text-black  f2 text-4xl md:text-5xl">TeamLoom</h3>
            </Link>

            <h5 className="text-center text-[#8b8c8f] mb-6">
              Have an account?{" "}
              <Link
                to="/login"
                className="link-highlight"
              >
                Log In
              </Link>{" / "}
              <Link
                to="/"
                className="link-highlight"
              >
                back to home
              </Link>
            </h5>

            {/* Email Login Form */}
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <h5 className="text-center text-sm">Sign up with email</h5>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="form-control  flex flex-col md:flex-row items-center gap-2">
                <div className="w-full">
                  <select defaultValue='default' className="select select-bordered w-full" name="role">
                    <option
                      disabled
                      value="default"
                    >
                      Choose a role
                    </option>
                    <option value="hr">HR</option>
                    <option value="employee">Employee</option>
                  </select>
                </div>
                <div className="w-full">
                  <select defaultValue='default' className="select select-bordered w-full" name="designation">
                    <option
                      value="default"
                      disabled
                    >
                      Designation
                    </option>
                    <option value="Associate HR">Associate HR</option>
                      <option value="Sales Assistant">Sales Assistant</option>
                      <option value="Social Media executive">Social Media executive</option>
                      <option value="Digital Marketer">Digital Marketer</option>       
                  </select>
                </div>
              </div>
              <div className="form-control flex flex-col md:flex-row items-center gap-2">
                <div className="w-full">
                <input
                  type="text"
                  name="bank_account"
                  placeholder="Bank account no."
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                </div>
                <div className="w-full">
                <input
                  type="number"
                  name="salary"
                  placeholder="Salary"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                </div>
              </div>

              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="file"
                  name="profileURL"
                  placeholder="Profile photo"
                  accept="image/*"
                  className="file-input file-input-bordered file-input-xs w-full max-w-lg h-10"
                />
              </div>

              <button
                type="submit"
                className="btn1 w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all"
              >
                Sign Up
              </button>

               {/* Google Login */}
            <hr className="my-5"/>
            <div
              className=" mt-8 flex items-center justify-center border px-4 py-3 rounded-md mb-6 cursor-pointer hover:bg-gray-50 transition-all"
              onClick={handleGoogleLogin}
            >
              <img src="https://i.ibb.co.com/L8Z03cz/google-icon.png" alt="" className="w-6" />
              <span>Log in with Google</span>
            </div>
            </form>
          </div>
        </div>

        <div className="w-full">
          <img
            src="https://i.ibb.co.com/wJLmkxt/signup.png"
            className="hidden md:block w-7/8"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
