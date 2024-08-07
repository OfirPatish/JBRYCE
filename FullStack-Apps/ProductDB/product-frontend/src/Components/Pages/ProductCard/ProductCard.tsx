import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  units: number;
  ManufacturerName: string;
  LastUpdate: string;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ProductCard = ({ product }: { product: Product }): JSX.Element => {
  return (
    <div className="product-card">
      {product.name} - {product.ManufacturerName} - ${product.price} - {product.units} units - Last updated:{" "}
      {formatDate(product.LastUpdate)}
    </div>
  );
};

export default ProductCard;
