import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" text-white-700 px-6 py-4 flex items-center justify-between  top-0 left-0 w-full z-50 shadow-md bg-white-900">
      {/* Logo on the left */}
      <div className="text-4xl font-bold pl-28 text-green-800">VEDIC</div>

      {/* Navigation Links centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6 text-green-800 font-bold ">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="/About" className="hover:text-gray-500">About</Link>
        <Link to="/features" className="hover:text-gray-500">Features</Link>
        <Link to="/contact" className="hover:text-gray-500">Contact</Link>
      </div>

      {/* Login/Register buttons on the right */}
      <div className="space-x-4 flex pr-24 font-bold ">
        <Link to="/login" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900 hover:text-white">
          Login
        </Link>
        <Link to="/register" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900 hover:text-white">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
