import { useLoaderData } from "react-router-dom";
import DigitalCard from "../components/DigitalCard";
import GetSteps from "../components/GetSteps";
import Hero from "../components/Hero";
import Simple from "../components/Simple";
import WorkFlow from "../components/WorkFlow";
import StartSection from "../components/StartSection";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Hero />
      <StartSection/>
      <DigitalCard data={data} />
      <GetSteps />
      <Simple />
      <WorkFlow/>
    </div>
  );
};

export default Home;
