import Hero from "../components/hero";
import Night from "../assets/2.jpg";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Hero cName="hero-mid" heroimg={Night} title="Contact " btnClass="hide" />
      <ContactForm />
    </>
  );
}
