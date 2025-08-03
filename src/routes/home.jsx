import Hero from "../components/hero";
import image from "../assets/12.jpg";
import Destination from "../components/destination";
import DestinationTripCard from "../components/destinationTripCard";

export default function Home() {
  return (
    <>
      <div>
        <Hero
          cName="hero"
          heroimg={image}
          title="Your Journey Your Story "
          text="Choose your Favourite Destination"
          url="/"
          btnClass="show"
          btnHeading="Travel Plan"
        />
      </div>
      <Destination />
      <DestinationTripCard />
    </>
  );
}
