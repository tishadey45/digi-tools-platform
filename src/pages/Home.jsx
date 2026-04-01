import { useLoaderData } from "react-router-dom";
import DigitalCard from "../components/DigitalCard";
import GetSteps from "../components/GetSteps";
import Hero from "../components/Hero";
import Simple from "../components/Simple";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Hero />
      <DigitalCard data={data} />
      <GetSteps />
      <Simple />
    </div>
  );
};

export default Home;
