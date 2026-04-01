import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const GetSteps = () => {
  return (
    <div>
      <div className="px-16 py-20 mx-auto max-w-7xl">
        <div className="pb-20 text-center">
          <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
          <p className="pt-4 font-semibold text-gray-500 font-3xl">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="absolute z-50 flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-linear-to-r from-purple-500 to-indigo-500 top-2 right-2">
              01
            </div>

            <div className="text-center">
              <div className="grid object-cover mx-auto bg-purple-200 rounded-full shadow-lg w-25 h-25 place-items-center">
                <img src={userImg} alt="" className="block w-16 h-16" />
              </div>

              <h2 className="mt-4 text-2xl font-bold">Create Account</h2>

              <p className="font-semibold text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="absolute z-50 flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-linear-to-r from-purple-500 to-indigo-500 top-2 right-2">
              02
            </div>
            <div className="text-center">
              <div className="grid object-cover mx-auto bg-purple-200 rounded-full shadow-lg w-25 h-25 place-items-center">
                <img src={packageImg} alt="" className="block w-16 h-16" />
              </div>

              <h2 className="mt-4 text-2xl font-bold">Choose Products</h2>

              <p className="font-semibold text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="absolute z-50 flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-linear-to-r from-purple-500 to-indigo-500 top-2 right-2">
              03
            </div>

            <div className="text-center">
              <div className="grid object-cover mx-auto bg-purple-200 rounded-full shadow-lg w-25 h-25 place-items-center">
                <img src={rocketImg} alt="" className="block w-16 h-16" />
              </div>

              <h2 className="mt-4 text-2xl font-bold">Start Creating</h2>

              <p className="font-semibold text-gray-500">
                Download and start using your premium  tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSteps;
