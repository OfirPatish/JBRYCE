import dal_mysql from "../DAL/dal_mysql";

const getAllCustomers = async () => {
  const sql = "SELECT * FROM customers";
  const customers = await dal_mysql.execute(sql);
  return customers;
};

const getProductsByCategory = async () => {
  const sql = `
    SELECT categories.CategoryName, products.ProductName 
    FROM categories
    INNER JOIN products ON categories.CategoryID = products.CategoryID
    WHERE categories.CategoryName LIKE '%o%'
  `;
  const productsByCategory = await dal_mysql.execute(sql);
  return productsByCategory;
};

const getOrdersInDateRange = async () => {
  const sql = `
      SELECT OrderID, CustomerID, EmployeeID
      FROM orders
      WHERE OrderDate BETWEEN '1996-04-01' AND '1996-05-31'
      ORDER BY OrderDate ASC, CustomerID DESC
    `;
  const orders = await dal_mysql.execute(sql);
  return orders;
};

export default { getAllCustomers, getProductsByCategory, getOrdersInDateRange };
