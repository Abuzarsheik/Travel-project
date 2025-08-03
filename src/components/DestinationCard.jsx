export default function DestinationCard({ title, text, image }) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
