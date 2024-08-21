import "./Header.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
