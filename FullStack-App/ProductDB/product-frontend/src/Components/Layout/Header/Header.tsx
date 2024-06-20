import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <div className="logo-title">
        <img src="/logo.jpg" alt="Logo" style={{ height: "50px", borderRadius: "50%" }} />
        <h2>Product Management</h2>
      </div>
    </div>
  );
}

export default Header;
