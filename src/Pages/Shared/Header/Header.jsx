import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to={"/"}>home</NavLink>
      </li>
      <li>
        <NavLink to={"/users"}>Users</NavLink>
      </li>
      <li>
        <NavLink to={"/addcoffee"}>Add Coffee</NavLink>
      </li>
      <li>
        <NavLink to={"/signIn"}>Sign In</NavLink>
      </li>
      <li>
        <NavLink to={"/signUp"}>Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-[url('/public/images/more/15.jpg')] p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left empty div for spacing */}
        <div className="flex-1"></div>

        {/* Centered title */}
        <div className="flex items-center justify-center">
          <img
            className="w-20 h-20"
            src="/public/images/more/logo1.png"
            alt=""
          />
          <h1 className=" text-white font-customFont text-3xl py-3 font-semibold">
            Espresso Emporium
          </h1>
        </div>

        {/* Navigation links */}
        <div className="flex-1 flex justify-end space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white hover:text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addcoffee"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white hover:text-gray-400"
            }
          >
            Add Coffee
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white hover:text-gray-400"
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/signIn"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white hover:text-gray-400"
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/signUp"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white hover:text-gray-400"
            }
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
