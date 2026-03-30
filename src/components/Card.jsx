const Card = () => {
  return (
    <div>
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
          <p className="font-serif dark:text-gray-500">
            Choose from our curated collection of premium digital products
            designed  <br />
            to boost your productivity and creativity.
          </p>
          {/* <div role="tablist" className="tabs tabs-box">
            <a role="tab" className="tab">
              Tab 1
            </a>
            <a role="tab" className="tab tab-active">
              Tab 2
            </a>
            <a role="tab" className="tab">
              Tab 3
            </a>
          </div> */}
        </div>
      </div>

      <div className="px-16 py-20 mx-auto max-w-7xl" >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="items-start border border-gray-200 shadow-sm card-body w-86 card">
            <div className="flex items-center gap-60">
              <img src="../assets/writing_23274001.png" alt="" />
              <span className="px-4 py-2 badge badge-xs badge-warning">
                Most Popular
              </span>
            </div>
            <div className="">
              <h2 className="text-3xl font-bold">Al Writing Pro</h2>
              <p className="pt-2">
                Generate high-quality content, blogs, and <br /> marketing copy
                in seconds with advanced AI.
              </p>
              <a className="pt-2 text-3xl font-semibold">
                $29<span className="text-sm text-gray-400">/Mo</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 mt-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited AI generations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>50+ writing templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Grammar checker</span>
              </li>
            </ul>
            <div className="mt-2">
              <button
                type="button"
                className="py-3 rounded-full px-30 bg-linear-to-r from-purple-500 to-indigo-500 dark:text-gray-100"
              >
                Rounded
              </button>
            </div>
          </div>
          <div className="items-start border border-gray-200 shadow-sm card-body w-86 card">
            <div className="flex items-center gap-60">
              <img src="../assets/writing_23274001.png" alt="" />
              <span className="px-4 py-2 badge badge-xs badge-warning">
                Most Popular
              </span>
            </div>
            <div className="">
              <h2 className="text-3xl font-bold">Al Writing Pro</h2>
              <p className="pt-2">
                Generate high-quality content, blogs, and <br /> marketing copy
                in seconds with advanced AI.
              </p>
              <a className="pt-2 text-3xl font-semibold">
                $29<span className="text-sm text-gray-400">/Mo</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 mt-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited AI generations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>50+ writing templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Grammar checker</span>
              </li>
            </ul>
            <div className="mt-2">
              <button
                type="button"
                className="py-3 rounded-full px-30 bg-linear-to-r from-purple-500 to-indigo-500 dark:text-gray-100"
              >
                Rounded
              </button>
            </div>
          </div>
          <div className="items-start border border-gray-200 shadow-sm card-body w-86 card">
            <div className="flex items-center gap-60">
              <img src="../assets/writing_23274001.png" alt="" />
              <span className="px-4 py-2 badge badge-xs badge-warning">
                Most Popular
              </span>
            </div>
            <div className="">
              <h2 className="text-3xl font-bold">Al Writing Pro</h2>
              <p className="pt-2">
                Generate high-quality content, blogs, and <br /> marketing copy
                in seconds with advanced AI.
              </p>
              <a className="pt-2 text-3xl font-semibold">
                $29<span className="text-sm text-gray-400">/Mo</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 mt-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited AI generations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>50+ writing templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Grammar checker</span>
              </li>
            </ul>
            <div className="mt-2">
              <button
                type="button"
                className="py-3 rounded-full px-30 bg-linear-to-r from-purple-500 to-indigo-500 dark:text-gray-100"
              >
                Rounded
              </button>
            </div>
          </div>
          <div className="items-start border border-gray-200 shadow-sm card-body w-86 card">
            <div className="flex items-center gap-60">
              <img src="../assets/writing_23274001.png" alt="" />
              <span className="px-4 py-2 badge badge-xs badge-warning">
                Most Popular
              </span>
            </div>
            <div className="">
              <h2 className="text-3xl font-bold">Al Writing Pro</h2>
              <p className="pt-2">
                Generate high-quality content, blogs, and <br /> marketing copy
                in seconds with advanced AI.
              </p>
              <a className="pt-2 text-3xl font-semibold">
                $29<span className="text-sm text-gray-400">/Mo</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 mt-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited AI generations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>50+ writing templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Grammar checker</span>
              </li>
            </ul>
            <div className="mt-2">
              <button
                type="button"
                className="py-3 rounded-full px-30 bg-linear-to-r from-purple-500 to-indigo-500 dark:text-gray-100"
              >
                Rounded
              </button>
            </div>
          </div>
          <div className="items-start border border-gray-200 shadow-sm card-body w-86 card">
            <div className="flex items-center gap-60">
              <img src="../assets/writing_23274001.png" alt="" />
              <span className="px-4 py-2 badge badge-xs badge-warning">
                Most Popular
              </span>
            </div>
            <div className="">
              <h2 className="text-3xl font-bold">Al Writing Pro</h2>
              <p className="pt-2">
                Generate high-quality content, blogs, and <br /> marketing copy
                in seconds with advanced AI.
              </p>
              <a className="pt-2 text-3xl font-semibold">
                $29<span className="text-sm text-gray-400">/Mo</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 mt-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited AI generations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>50+ writing templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Grammar checker</span>
              </li>
            </ul>
            <div className="mt-2">
              <button
                type="button"
                className="py-3 rounded-full px-30 bg-linear-to-r from-purple-500 to-indigo-500 dark:text-gray-100"
              >
                Rounded
              </button>
            </div>
          </div>
          <div className="items-start border border-gray-200 shadow-sm card-body w-86 card">
            <div className="flex items-center gap-60">
              <img src="../assets/writing_23274001.png" alt="" />
              <span className="px-4 py-2 badge badge-xs badge-warning">
                Most Popular
              </span>
            </div>
            <div className="">
              <h2 className="text-3xl font-bold">Al Writing Pro</h2>
              <p className="pt-2">
                Generate high-quality content, blogs, and <br /> marketing copy
                in seconds with advanced AI.
              </p>
              <a className="pt-2 text-3xl font-semibold">
                $29<span className="text-sm text-gray-400">/Mo</span>
              </a>
            </div>
            <ul className="flex flex-col gap-2 mt-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited AI generations</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>50+ writing templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block size-4 me-2 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Grammar checker</span>
              </li>
            </ul>
            <div className="mt-2">
              <button
                type="button"
                className="py-3 rounded-full px-30 bg-linear-to-r from-purple-500 to-indigo-500 dark:text-gray-100"
              >
                Rounded
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
