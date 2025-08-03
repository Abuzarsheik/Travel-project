import DestinationCard from "./destinationCard.jsx";
import DestinationCardData from "../data/destinationCardData.js";
import "../css/destinationCard.css";

export default function DestinationTripCard() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        {DestinationCardData.map((d) => (
          <DestinationCard
            key={d.id}
            title={d.title}
            text={d.text}
            image={d.image}
          />
        ))}
      </div>
    </div>
  );
}
