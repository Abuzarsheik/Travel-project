import Hero from "../components/hero";
import Night from "../assets/1.jpg";
import DestinationTripCard from "../components/destinationTripCard"

export default function Service() {
  return (
    <div>
      <Hero cName="hero-mid" heroimg={Night} title="Service " btnClass="hide" />
      <DestinationTripCard />
    </div>
  );
}
