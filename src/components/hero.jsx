import "../css/hero.css";

export default function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.heroimg} alt="heroImage"></img>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnHeading}
        </a>
      </div>
    </div>
  );
}
