import { Link, NavLink, useNavigate } from "react-router-dom";
import userDefaultPicture from "../../assets/user.png";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const navLinks = (
    <>
      <li>
        <NavLink className="text-3xl font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-3xl font-bold" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-3xl font-bold" to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar gradient p-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="font-bold text-6xl text-white">
            Health Expo Day
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={userDefaultPicture} />
                </div>
              </label>
              <span>{user.name}</span>
              <button
                onClick={() => {
                  logOut();
                  swal("You signed out successfully", "success");
                  navigate("/login");
                }}
                className="btn"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
