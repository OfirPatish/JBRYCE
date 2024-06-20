import ProductList from "../../Pages/ProductList/ProductList";
import "./MainPage.css";

function MainPage(): JSX.Element {
  return (
    <div className="MainPage">
      <header>
        <h1>Welcome to Our Product Store</h1>
        <p>Discover a wide range of products tailored to meet your needs.</p>
      </header>

      <section>
        <h2>About Us</h2>
        <p>
          We are committed to providing the best products at competitive prices. Our team works tirelessly to ensure
          that our inventory is always stocked with the latest and greatest items.
        </p>
      </section>

      <section>
        <h2>Our Products</h2>
        <p>Below is a selection of our featured products. Click on any product to learn more about it.</p>
        <ProductList />
      </section>

      <footer>
        <p>Thank you for visiting our store. We hope you find what you're looking for!</p>
      </footer>
    </div>
  );
}

export default MainPage;
