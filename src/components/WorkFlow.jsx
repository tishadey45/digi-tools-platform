const WorkFlow = () => {
  return (
    <div>
      <div className="px-16 py-20 bg-linear-to-r from-purple-500 to-indigo-500 top-2 right-2">
        <div className="pb-20 text-center">
          <h2 className="text-5xl font-bold text-white">
            Ready to Transform Your Workflow?
          </h2>
          <p className="pt-4 text-gray-200 font-3xl">
            Join thousands of professionals who are already using Digitools to
            work smarter. <br /> Start your free trial today.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="text-purple-600 border-none btn btn-primary rounded-4xl bg-gray-50">
             Explore Products
            </button>
            <button className="text-gray-200 w-35 border-gray-50 btn rounded-4xl bg-linear-to-r from-purple-500 to-indigo-500">
              View Pricing
            </button>
          </div>
          <p className="pt-4 text-gray-200">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
