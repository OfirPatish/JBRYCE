import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

interface Product {
  id: number;
  name: string;
  price: number;
  units: number;
  ManufacturerName: string;
  LastUpdate: string;
}

function Product(): JSX.Element {
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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="Product">
      <h1>Explore Our Esteemed Products</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            {product.name} - {product.ManufacturerName} - ${product.price} - {product.units} units - Last updated:{" "}
            {formatDate(product.LastUpdate)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
