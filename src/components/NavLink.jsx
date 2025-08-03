import { Link } from "react-router-dom";

export default function NavLinks({ item }) {
  return (
    <li>
      <Link to={item.url} className={item.cName}>
        <i className={item.icons}></i> {item.title}
      </Link>
    </li>
  );
}
