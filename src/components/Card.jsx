import React from "react";

const Card = ({ toolData }) => {
    console.log(toolData);
  const { name, description, price, image, tagType, period, tag,features } = toolData;
  return (
    <div className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <img src={image} alt={name} className="object-contain w-16 h-16" />
        <span className="px-3 py-1 text-xs text-yellow-800 bg-yellow-200 rounded-full">
          {tag}
        </span>
      </div>
      <h2 className="mb-2 text-xl font-bold">{toolData?.name}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <p className="mb-4 text-lg font-semibold">
        ${price} <span className="text-sm text-gray-400">{period}</span>
      </p>
      <ul className="flex flex-col gap-2 mb-4 text-sm">
        {features?.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-green-500"
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
            {feature}
          </li>
        ))}
      </ul>
      <button className="py-2 mt-auto text-white rounded-full bg-linear-to-r from-purple-500 to-indigo-500">
        Buy Now
      </button>
    </div>
  );
};

export default Card;
