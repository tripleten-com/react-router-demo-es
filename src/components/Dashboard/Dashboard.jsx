import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>El analista de Emojis: todo sobre los Emojis</h1>
      <p>¡El destino #1 de opiniones de emojis en la Web desde 2020!</p>
      <Link to="/reviews">¡Haz clic aquí para ver mis últimas reseñas!</Link>
    </div>
  );
}

export default Dashboard;
