import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import SelectedProjects from "../components/SelectedProjects";

export default function Home() {
  return (
    <ContainerBlock>
      <Hero />
      <SelectedProjects />
    </ContainerBlock>
  );
}
