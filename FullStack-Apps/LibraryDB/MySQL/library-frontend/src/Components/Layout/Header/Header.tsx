import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { appStore } from "../../Redux/store";
import { createUserLogoutAction } from "../../Redux/AuthReducer";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import notify from "../../Utils/Notify";
import "./Header.css";

function Header(): JSX.Element {
  const [isLogged, setLogged] = useState(false);
  const [name, setName] = useState(appStore.getState().auth.username);
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = validateAndDispatchJWT();
    setLogged(isValid);
    setName(appStore.getState().auth.username);
  }, []);

  appStore.subscribe(() => {
    setLogged(appStore.getState().auth.jwt.length > 0);
    setName(appStore.getState().auth.username);
  });

  const handleLogout = () => {
    appStore.dispatch(createUserLogoutAction());
    notify.info("You have been logged out.");
    localStorage.removeItem("jwt");
    sessionStorage.removeItem("jwt");
    navigate("/login");
  };

  const logoutButton = () => <input type="button" value="Logout" onClick={handleLogout} />;

  const loginButton = () => (
    <>
      <input type="button" value="Login" onClick={() => navigate("/login")} />
      <input type="button" value="Register" onClick={() => navigate("/register")} />
    </>
  );

  return (
    <div className="Header">
      <div className="logo-title">
        <img src="/logo.jpg" alt="Logo" style={{ height: "50px", borderRadius: "50%" }} />
        <h2>Library Management</h2>
      </div>
      <div className="user-info">
        <div className="greeting">Hello {name}</div>
        <div className="button-container">{isLogged ? logoutButton() : loginButton()}</div>
      </div>
    </div>
  );
}

export default Header;
