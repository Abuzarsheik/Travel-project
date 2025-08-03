import "../css/Footer.css";
import footerData from "../data/footerData";
import Footerdata from "./Footerdata";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="right">
          <a href="www.facebook.com">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="www.instagram.com">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="www.behance.com">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="www.twitter.com">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        {footerData.map((f) => (
          <Footerdata
            key={f.id}
            title={f.title}
            link1={f.link1}
            link2={f.link2}
            link3={f.link3}
            link4={f.link4}
          />
        ))}
      </div>
    </div>
  );
}
