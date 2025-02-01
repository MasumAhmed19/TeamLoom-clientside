import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { saveUser } from "../../api/utils";

const Login = () => {
  const { user, setUser, signInWithGoogle, signIn } = useAuth();
  const navigate = useNavigate()

  

  const handleGoogleLogin = async () => {
    try {
      const res = await signInWithGoogle();

      // Save user in DB
      await saveUser(res?.user)
      navigate('/dashboard/profile');
      setUser(res.user);
      toast.success('Login Successful')
    }catch (err){
      console.log(err)
      toast.error('Login unsuccessful')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
        .then((res)=>{
            navigate('/dashboard/profile');
            setUser(res.user);
            toast.success('Login Successful')

        }).catch((err)=>{
            console.log(err);
            toast.error('Login unsuccessful')
        })
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-zinc-700 to-gray-900 p-5">
      <div className="flex flex-col md:flex-row items-center justify-between container mx-auto gap-10">
        <div className="w-full">
          <img src="https://i.ibb.co.com/Kr4KWPV/login.png" className="hidden md:block w-7/8" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8 w-full">

            <div className="">
              <Link to='/' className="flex items-center gap-5">
                <img
                  src="https://i.ibb.co.com/6H7FBtf/logo.png"
                  alt="Logo"
                  className="w-16"
                />
                <h3 className="text-white f2 text-4xl md:text-5xl">TeamLoom</h3>
              </Link>
            </div>


          {/* Login Container */}
          <div className="w-full max-w-md bg-white rounded-md shadow-lg p-8">
            <h4 className="text-center text-xl font-semibold mb-2">Welcome back to TeamLoom</h4>
            <h5 className="text-center text-[#8b8c8f] mb-6">
              Don't have an account?{" "}
              <Link to="/signup" className="link-highlight">
                Sign up for free
              </Link>
            </h5>

            

            {/* Email Login Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <h5 className="text-center text-sm">Log in with email</h5>

              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full px-4 py-2 border rounded-md focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn2"
              >
                Log in
              </button>
            </form>

            {/* Forgot Password */}
            <div className="text-center mt-4">
              <Link to="/" className="text-[#7201FF] hover:underline">
                Forgot your password?
              </Link>
            </div>


            {/* Google Login */}
            <hr className="my-5"/>
            <div
              className=" mt-8 flex items-center justify-center border px-4 py-3 rounded-md mb-6 cursor-pointer hover:bg-gray-50 transition-all"
              onClick={handleGoogleLogin}
            >
              <img src="https://i.ibb.co.com/L8Z03cz/google-icon.png" alt="" className="w-6" />
              <span>Log in with Google</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
