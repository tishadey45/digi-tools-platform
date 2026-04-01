import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-10 flex items-center justify-between px-4 py-4 shadow-sm navbar bg-base-100 sm:px-8 md:px-10 lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
          <h1 className="text-2xl font-bold text-transparent  bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text">
            DigiTools
          </h1>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
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
            <span className="text-gray-700 cursor-pointer hover:text-purple-500">
              Login
            </span>

            <button className="px-5 py-2 font-semibold text-white rounded-full bg-linear-to-r from-purple-500 to-indigo-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
