import { useEffect } from "react";
import "./MainPage.css";
import { NavLink } from "react-router-dom";
import Product from "../../Pages/Product/Product";

function MainPage(): JSX.Element {
  return (
    <div className="MainPage">
      <Product />
    </div>
  );
}

export default MainPage;
