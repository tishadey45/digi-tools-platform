import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed z-10 bg-base-100 shadow-sm sm:px-8 px-4 md:px-10 lg:px-16 py-4 flex items-center justify-between">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <h1 className=" font-bold bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent text-2xl">
            DigiTools
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a> Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <AiOutlineShoppingCart />
            <span className="cursor-pointer text-gray-700 hover:text-purple-500">
              Login
            </span>

            <button className="bg-linear-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
