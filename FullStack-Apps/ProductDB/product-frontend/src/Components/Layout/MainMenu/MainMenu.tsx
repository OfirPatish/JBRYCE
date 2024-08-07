import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu(): JSX.Element {
  return (
    <div className="MainMenu">
      <h2>Menu</h2>
      <hr />
      <NavLink to={"/"}>Home</NavLink>
      {/* <NavLink to={"/products"}>Products</NavLink> */}
      <NavLink to={"/updateProduct"}>Update Product</NavLink>
    </div>
  );
}

export default MainMenu;
