// Arrays to store the products and categories
const products = [];

function addProduct(submitEvent) {
  // Prevent the form from being submitted in the traditional way
  submitEvent.preventDefault();

  // Get the input values
  const product = document.getElementById("productInput").value;
  const price = document.getElementById("priceInput").value;
  const category = document.getElementById("categorySelect").value;
  const image = document.getElementById("imageInput").value;

  // Check if any of the inputs are empty (HTML has required attribute but this is a backup)
  if (!product || !price || !category || !image) {
    alert("Please fill all the fields");
    return;
  }

  // Add the new product to the products array
  products.push({
    product: product,
    price: price,
    category: category,
    image: image,
  });

  // Clear the input fields
  clearInputFields();

  // Render the product list
  renderProductList();
}

// Function to clear the input fields
function clearInputFields() {
  document.getElementById("productInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("categorySelect").selectedIndex = 0;
  document.getElementById("imageInput").value = "";
}

// Function to render the product list
function renderProductList() {
  // Get the productList div
  const productList = document.getElementById("productList");

  // Clear the productList div
  productList.innerHTML = "";

  // Check if there are no products
  if (products.length == 0) {
    productList.innerHTML = "<h2>No products in the cart</h2>";
    return;
  }

  // Add the title to the productList div
  productList.innerHTML += "<h2>My Cart</h2>";

  // Create a new table for the products
  const table = createTable();

  // Append the table to the productList div
  productList.innerHTML += table;

  // Add event listeners to the delete buttons
  addDeleteEventListeners();
}

// Function to create a table for the products
function createTable() {
  let table = `
          <table>
                  <thead>
                          <tr>
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>Category</th>
                                  <th>Image</th>
                                  <th>Action</th>
                          </tr>
                  </thead>
                  <tbody>`;

  // Add a row for each product in the array
  products.forEach((product, index) => {
    table += `
                          <tr>
                                  <td>${product.product}</td>
                                  <td>₪${product.price}</td>
                                  <td>${product.category}</td>
                                  <td><img src="${product.image}" width="50" height="50"></td>
                                  <td><button class="deleteBtn" data-index="${index}">Delete</button></td>
                          </tr>`;
  });

  table += `</tbody></table>`;
  return table;
}

// Function to add event listeners to the delete buttons
function addDeleteEventListeners() {
  const deleteButtons = document.getElementsByClassName("deleteBtn");
  Array.from(deleteButtons).forEach((button) => {
    button.addEventListener("click", function (deleteButtonClickEvent) {
      const productIndex = deleteButtonClickEvent.currentTarget.getAttribute("data-index");
      products.splice(productIndex, 1);
      renderProductList();
    });
  });
}

// Attach the addProduct function to the form's submit event
document.getElementById("productForm").addEventListener("submit", addProduct);
