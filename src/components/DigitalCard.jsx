import React from "react";
import Card from "./Card";

const DigitalCard = ({ data }) => {
  console.log(data);
  return (
    <div className="px-16 py-20 mx-auto max-w-7xl">
      <div className="pb-20 text-center">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p className="pt-4 font-semibold text-gray-500 font-3xl">
          Choose from our curated collection of premium digital products
          designed <br /> boost your productivity and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((toolData) => (
          <Card key={toolData.id} toolData={toolData} />
        ))}
      </div>
    </div>
  );
};

export default DigitalCard;
