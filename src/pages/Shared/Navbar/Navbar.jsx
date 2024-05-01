import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user.email);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
  };
  const navLinks = (
    <>
      <li className="mx-4 font-poppins">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="mx-4 font-poppins">
        <NavLink to="/about">About</NavLink>
      </li>

      <li className="mx-4 font-poppins">
        <NavLink to="/services">Services</NavLink>
      </li>

      <li className="mx-4 font-poppins">
        <NavLink to="/login">Login</NavLink>
      </li>

      <li className="mx-4 font-poppins">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="mx-4 font-poppins">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar container mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center ">
            <p className="mr-6 font-poppins font-bold">{user?.email}</p>
            <Link
              onClick={() => handleLogOut()}
              className="btn font-poppins"
              to="/"
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link className="btn mx-4 font-poppins" to="/login">
              Login
            </Link>
            <Link className="btn font-poppins" to="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
