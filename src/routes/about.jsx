import Hero from "../components/hero";
import Night from "../assets/night.jpg";
import AboutData from "../data/aboutData";

export default function About() {
  return (
    <div>
      <Hero cName="hero-mid" heroimg={Night} title="About " btnClass="hide" />
      <AboutData />
    </div>
  );
}
