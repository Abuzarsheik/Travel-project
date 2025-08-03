import "../css/ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form action="">
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Subject" type="text" />
        <textarea placeholder="Message" rows={4} />
        <button>Send Message</button>
      </form>
    </div>
  );
}
