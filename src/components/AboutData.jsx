import aboutData from "../data/aboutData.js";
import AboutDescription from "./AboutDescription.jsx";
import "../css/aboutData.css"

export default function AboutData() {
  return (
    <div className="about-container">
      {aboutData.map((a) => (
        <AboutDescription key={a.id} title={a.title} text={a.text} />
      ))}
    </div>
  );
}
