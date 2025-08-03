import "../css/navbar.css";
import NavLinks from "./NavLink.jsx";
import { NavData } from "../data/NavData.js";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <nav className="NavbarItems">
      <h1 className="NavbarLogo">Trippy</h1>
      <div onClick={handleMenu} className="menu-icons">
        <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={menu ? "NavMenu active" : "NavMenu"}>
        {NavData.map((item) => {
          return <NavLinks key={item.title} item={item} />;
        })}
      </ul>
    </nav>
  );
}
