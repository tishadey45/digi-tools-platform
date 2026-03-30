import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="min-h-screen gap-0 hero bg-base-200">
      <div className="flex-col gap-x-10 hero-content lg:flex-row-reverse">

        <img
          src="../assets/banner.png"
          className="w-full max-w-sm rounded-lg shadow-2xl"
          alt="Hero"
        />
        <div className="flex flex-col items-start max-w-xl">
            <button className="btn btn-soft btn-primary rounded-4xl">New: AI-Powered Tools Available</button>
          <h1 className="text-6xl font-bold leading-tight">
            Supercharge Your <br/>Digital Workflow
          </h1>

          <p className="mt-4 text-start">
            Access premium AI tools, design assets, templates, and
            productivity software—all in one place. Start creating faster today.
           <br /> Explore Products
          </p>
          <div className="flex gap-4 mt-6">
            <button className="text-white border-none btn btn-primary rounded-4xl bg-linear-to-r from-purple-500 to-indigo-500">
              Explore Products
            </button>
            <button className="btn border-primary text-primary rounded-4xl">
              <IoPlayOutline />
             Watch Demo
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;