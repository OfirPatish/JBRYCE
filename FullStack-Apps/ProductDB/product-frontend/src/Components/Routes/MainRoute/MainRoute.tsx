import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import ProductList from "../../Pages/ProductList/ProductList";
import ProductStock from "../../Pages/ProductStock/ProductStock";
import NotFound from "../../Pages/NotFound/NotFound";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/updateProduct" element={<ProductStock />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
