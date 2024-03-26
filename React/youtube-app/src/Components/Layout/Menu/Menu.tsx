import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <h2>Menu Component</h2>
      <NavLink to="/">Song List</NavLink>
      <br />
      <NavLink to="/addSong">Add New Song</NavLink>
      <br />
      <NavLink to="/about">About Me</NavLink>
      <br />
    </div>
  );
}

export default Menu;
