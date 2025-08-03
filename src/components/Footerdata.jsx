export default function FooterData({ title, link1, link2, link3, link4 }) {
  return (
    <div>
      <h4>{title}</h4>
      <a href="/">{link1}</a>
      <a href="/">{link2}</a>
      <a href="/">{link3}</a>
      <a href="/">{link4}</a>
    </div>
  );
}
