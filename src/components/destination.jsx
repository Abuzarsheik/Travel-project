import destinationDescriptionData from "../data/destinationDescriptionData.js";
import "../css/destination.css";
import DestinationDescription from "./DestinationDescription.jsx";

export default function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the oppurtunity to see a lot, within a time frame.</p>
        {destinationDescriptionData.map((d) => (
          <DestinationDescription
            key={d.id}
            title={d.title}
            text={d.text}
            image1={d.image1}
            image2={d.image2}
            className={d.className}
          />
        ))}
      </div>
    </>
  );
}
