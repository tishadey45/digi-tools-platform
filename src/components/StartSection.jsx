const StartSection = () => {
  return (
    <div>
      <div className="py-12 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600">
        <div className="grid max-w-6xl grid-cols-1 mx-auto text-center text-white divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-white/30">
          <div className="py-6">
            <h2 className="text-5xl font-bold">50K+</h2>
            <p className="mt-2 text-lg text-purple-100">Active Users</p>
          </div>

          <div className="py-6">
            <h2 className="text-5xl font-bold">200+</h2>
            <p className="mt-2 text-lg text-purple-100">Premium Tools</p>
          </div>

          <div className="py-6">
            <h2 className="text-5xl font-bold">4.9</h2>
            <p className="mt-2 text-lg text-purple-100">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
