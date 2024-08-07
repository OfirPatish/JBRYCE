import dal_mysql from "../DAL/dal_mysql";

const getAllProducts = async () => {
  return await dal_mysql.execute(`
    SELECT 
      products.id AS id,
      products.name AS name,
      products.price AS price,
      manufacturers.name AS ManufacturerName,
      products.units AS units,
      products.last_update AS LastUpdate
    FROM 
      products
    JOIN 
      manufacturers ON products.manufacturer_id = manufacturers.id;
  `);
};

const updateProductUnits = async (id: number, units: number) => {
  return await dal_mysql.execute(`
    UPDATE products
    SET units = ${units}
    WHERE id = ${id}
  `);
};

export { getAllProducts, updateProductUnits };
