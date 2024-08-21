import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Reviews from "../Reviews/Reviews";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";
import AboutUs from "../AboutUs/AboutUs";
import SiteHistory from "../AboutUs/SiteHistory";
import SiteMission from "../AboutUs/SiteMission";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
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
