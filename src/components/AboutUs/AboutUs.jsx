import { Outlet, Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <ul>
        <li>
          <Link to="mission">Nuestra misión</Link>
        </li>
        <li>
          <Link to="history">Historia del sitio</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
