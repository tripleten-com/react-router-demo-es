import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Reviews from "./Reviews/Reviews";
import Review from "./Review/Review";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./AboutMe/Contact";
import Hobbies from "./AboutMe/Hobbies";
import MyStory from "./AboutMe/MyStory";
import AboutUs from "./AboutUs/AboutUs";
import SiteHistory from "./AboutUs/SiteHistory";
import SiteMission from "./AboutUs/SiteMission";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Obtener los datos de la reseña del servidor.
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Pasa el cuerpo de la respuesta analizada a la función setter.
        setReviews(data);
      })
      .catch(console.error);
    // Un array de dependencias vacío significa que el hook sólo se ejecuta cuando se inicia el componente.
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="mission" element={<SiteMission />} />
          <Route path="history" element={<SiteHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
