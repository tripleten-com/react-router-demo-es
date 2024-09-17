import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - ¡Página no encontrada!
      </h3>
      <p className="not-found__text">¡Uy! Aquí no hay nada... Lo siento. 🥺</p>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default PageNotFound;
