import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { BsPencilSquare } from "react-icons/bs";

const Header = () => {
  const { user, logOut } = useAuth();

  const menus = (
    <div className="flex gap-5 text-lg f1">
      <div className="group relative inline-block">
        <NavLink
          className="navlink"
          to="/"
        >
          home
        </NavLink>
        <span
          className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"
        ></span>
      </div>

      <div className="group relative inline-block">
        <NavLink
          className="navlink"
          to="/about"
        >
          about
        </NavLink>
        <span
          className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"
        ></span>
      </div>
      <div className="group relative inline-block">
        <NavLink
          className="navlink"
          to="/contact"
        >
          contact
        </NavLink>
        <span
          className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"
        ></span>
      </div>
      <div className="group relative inline-block">
        <div>
          <NavLink
            className="navlink"
            to="/login"
          >
            login
          </NavLink>
        </div>
        <span
          className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-11/12"
        ></span>
      </div>
    </div>
  );

  const dropdownMenu = (
    <div className="dropdownMenu w-screen">
      <span>
        <NavLink
          className="navlink"
          to="/"
        >
          home
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to="/queries"
        >
          queries
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to={`/my-queries`}
        >
          My Queries
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to={`/my-recommendations`}
        >
          My Recommendations
        </NavLink>
      </span>
      <span>
        <NavLink
          className="navlink"
          to={`/recommendations-for-me`}
        >
          Recommendations for me
        </NavLink>
      </span>

      <span>
        <NavLink
          className="navlink"
          to="/about"
        >
          about
        </NavLink>
      </span>
    </div>
  );

  return (
    <div className="bg-black ">
      <div className="drawer container mx-auto">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full text-white">

            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    
                  ></path>
                </svg>
              </label>
            </div>

            <div className="mx-2 flex-1 px-2">
              <Link className="flex items-center gap-1">
                  <img src="/src/assets/logo.png" className="w-8"/> <h4 className="f2 text-4xl">TeamLoom</h4>
              </Link>
            </div>

            <div className="hidden flex-none lg:block">
              <ul className="flex items-center justify-center gap-3">
                {/* Navbar menu content here */}
                {
                  menus
                }

                
              </ul>
            </div>

          </div>
        </div>

        {/* sidebar menu */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
