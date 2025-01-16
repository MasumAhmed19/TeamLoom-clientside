import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import axios from 'axios';

const SignUp = () => {
  const { user, setUser, signInWithGoogle, createUser, updateUserProfile } =
    useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        navigate("/");
        setUser(res.user);
        // TOAST: successfull login
      })
      .catch((err) => {
        // TOAST: Login failed
        console.log(err);
      });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const profileURL = 'https://i.ibb.co.com/j8wSS4s/mehedi.jpg';
    const password = form.password.value;

    const newUserData = {
        name,
        email,
        role,
        profileURL,
        password
    }

    console.log(newUserData)

    createUser(email, password)
      .then((res) => {
        // const curUser = res.user;
        updateUserProfile(name, profileURL)
          .then(() => {
            console.log("user profile updated")
            const result = axios.post(`${import.meta.env.VITE_API_URL}/add-user`, newUserData);

            navigate("/dashboard");
            toast.success('Successfully SignUp')
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(email, password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-zinc-700 to-gray-900 p-5">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto gap-10">
        <div className="w-full">
          <div className="max-w-lg bg-white rounded-md shadow-lg p-8">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 py-5"
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
                className="text-[#7201FF]"
              >
                Log In
              </Link>
            </h5>

            {/* Google Login */}
            <div
              className="flex items-center justify-center border px-4 py-3 rounded-md mb-6 cursor-pointer hover:bg-gray-100 transition-all"
              onClick={handleGoogleLogin}
            >
              <FaGoogle className="mr-2" />
              <span>Log in with Google</span>
            </div>

            {/* Email Login Form */}
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <h5 className="text-center text-sm">or SIgn up with email:</h5>
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

              <div className="form-control">
                <select className="select select-bordered w-full " name="role">
                  <option
                  value="disabled selected"
                  >
                    Choose a role
                  </option>
                  <option value='hr'>HR</option>
                  <option value='employee'>Employee</option>
                </select>
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
                  className="file-input file-input-bordered file-input-xs w-full max-w-lg h-10"
                //   required
                />
              </div>

              <button
                type="submit"
                className="btn1 w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all"
              >
                Sign Up
              </button>
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
