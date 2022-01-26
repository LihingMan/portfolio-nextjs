import { FunctionComponent } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import SelectedProjects from "../components/SelectedProjects";

const Home: FunctionComponent = () => {
  return (
    <ContainerBlock>
      <Hero />
      <SelectedProjects />
    </ContainerBlock>
  );
};

export default Home;
