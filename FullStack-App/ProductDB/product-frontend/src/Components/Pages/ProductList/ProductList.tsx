import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

interface Product {
  id: number;
  name: string;
  price: number;
  units: number;
  ManufacturerName: string;
  LastUpdate: string;
}

const ProductList = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products.", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Explore Our Esteemed Products</h1>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
