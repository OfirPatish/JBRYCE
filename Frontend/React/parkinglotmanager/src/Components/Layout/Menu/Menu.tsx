import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <h2>Menu Component</h2>
      <NavLink className="menu-link" to="/">
        Car List
      </NavLink>
      <NavLink className="menu-link" to="/addCar">
        Add New Car
      </NavLink>
      <NavLink className="menu-link" to="/removeCar">
        Remove Car
      </NavLink>
    </div>
  );
}

export default Menu;
