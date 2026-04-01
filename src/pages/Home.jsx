import React from "react";
import Hero from "../components/Hero";
import DigitalCard from "../components/DigitalCard";
import {useLoaderData} from "react-router-dom";

const Home = () => {
  const data = useLoaderData()
  console.log(data);
  return (
    <div>
      <Hero />
      <DigitalCard data ={data} />
      <GetSteps/>
    </div>
  );
};

export default Home;