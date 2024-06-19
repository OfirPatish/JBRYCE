import { useState, useEffect } from "react";
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

function ProductStock(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [newUnits, setNewUnits] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

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

  const handleUpdate = async () => {
    if (selectedProduct !== null) {
      try {
        await axios.post(`http://localhost:8080/api/products/${selectedProduct}/units`, { units: newUnits });
        alert("Product units updated successfully");
      } catch (error) {
        console.error("Failed to update product units.", error);
      }
    }
  };

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.units - b.units : b.units - a.units));

  return (
    <div className="product-stock">
      <h1>Explore Our Esteemed Products</h1>
      <input
        type="text"
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        Sort by Units ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <ul className="product-list">
        {filteredProducts.map((product: Product) => (
          <li
            key={product.id}
            onClick={() => {
              setSelectedProduct(product.id);
              setNewUnits(product.units);
            }}
          >
            {product.name} - {product.ManufacturerName} - ${product.price} - {product.units} units - Last updated:{" "}
            {new Date(product.LastUpdate).toLocaleDateString()}
          </li>
        ))}
      </ul>
      {selectedProduct !== null && (
        <div className="update-section">
          <h2>Update Units in Stock</h2>
          <input type="number" value={newUnits} onChange={(e) => setNewUnits(parseInt(e.target.value))} />
          <button onClick={handleUpdate}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default ProductStock;
