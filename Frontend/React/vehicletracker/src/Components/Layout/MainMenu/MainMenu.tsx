import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { appStore } from "../../Redux/store";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
  const [isUser, setIsUser] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = appStore.subscribe(() => {
      const state = appStore.getState();
      setIsLogged(state.auth.jwt.length > 0);
      switch (state.auth.role) {
        case "Admin":
          setIsAdmin(true);
          break;
        case "Company":
          setIsCompany(true);
          break;
        case "User":
          setIsUser(true);
          break;
        default:
          setIsAdmin(false);
          setIsCompany(false);
          setIsUser(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const renderMainMenu = () => (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <hr />
      <NavLink to={"/search/car"}>Car Locator</NavLink>
      <NavLink to={"/search/bike"}>Bike Locator</NavLink>
      <NavLink to={"/search/truck"}>Truck Locator</NavLink>
      <NavLink to={"/search/offroad"}>Offroad Locator</NavLink>
      <hr />
    </>
  );

  const renderAdminMenu = () => (
    <>
      <NavLink to={"/"}>Dashboard</NavLink>
      <NavLink to={"/"}>User Management</NavLink>
      <NavLink to={"/"}>Company Management</NavLink>
      <NavLink to={"/admin"}>Admin</NavLink>
      <hr />
    </>
  );

  const renderCompanyMenu = () => (
    <>
      <NavLink to={"/"}>Vacation Management</NavLink>
      <NavLink to={"/"}>Add Vacation</NavLink>
      <NavLink to={"/"}>Update Vacation</NavLink>
      <hr />
    </>
  );

  const renderUserMenu = () => (
    <>
      <NavLink to={"/"}>My Vacations</NavLink>
      <NavLink to={"/"}>Wish List</NavLink>
      <hr />
    </>
  );

  return (
    <div className="MainMenu">
      <h2>Menu</h2>
      <hr />
      {isLogged ? (
        <>
          {renderMainMenu()}
          {isAdmin && renderAdminMenu()}
          {isCompany && renderCompanyMenu()}
          {isUser && renderUserMenu()}
        </>
      ) : (
        <p style={{ color: "white" }}>Please login to view.</p>
      )}
    </div>
  );
}

export default MainMenu;
