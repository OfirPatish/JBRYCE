import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductStock.css";

interface Product {
  id: number;
  name: string;
  price: number;
  units: number;
  ManufacturerName: string;
  LastUpdate: string;
}

const ProductStock = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newUnits, setNewUnits] = useState<{ [key: number]: number }>({});

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

  const handleUpdate = async (id: number) => {
    try {
      await axios.post(`http://localhost:8080/api/products/${id}/units`, { units: newUnits[id] });
      setProducts(products.map((product) => (product.id === id ? { ...product, units: newUnits[id] } : product)));
      alert("Product units updated successfully");
    } catch (error) {
      console.error("Failed to update product units.", error);
    }
  };

  return (
    <div className="product-stock-list">
      <h1>Explore Our Esteemed Products</h1>
      {products.map((product: Product) => (
        <div key={product.id} className="product-stock-card">
          <div>
            {product.name} - {product.ManufacturerName} - ${product.price} - {product.units} units - Last updated:{" "}
            {new Date(product.LastUpdate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="update-section">
            <input
              type="number"
              value={newUnits[product.id] ?? product.units}
              onChange={(e) => setNewUnits({ ...newUnits, [product.id]: parseInt(e.target.value) })}
            />
            <button onClick={() => handleUpdate(product.id)}>Submit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductStock;
