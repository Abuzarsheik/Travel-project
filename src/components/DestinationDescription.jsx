export default function DestinationDescription({
  title,
  text,
  image1,
  image2,
  className,
}) {
  return (
    <div className={className}>
      <div className="descriptionText">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>
    </div>
  );
}
