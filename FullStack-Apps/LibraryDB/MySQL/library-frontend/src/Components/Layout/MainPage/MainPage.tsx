import { useEffect } from "react";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import "./MainPage.css";
import { NavLink } from "react-router-dom";

function MainPage(): JSX.Element {
  useEffect(() => {
    validateAndDispatchJWT();
  }, []);

  return (
    <div className="MainPage">
      <h1>Welcome to the Library</h1>
      <p>
        Discover a vast collection of books and authors. Our application offers a comprehensive search tool to help you
        explore and find your next read with ease.
      </p>
      <section className="navigation">
        <h2>Navigation</h2>
        <div className="nav-links">
          <NavLink to="/authors">Authors</NavLink>
          <NavLink to="/books">Books</NavLink>
        </div>
      </section>
      <section>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Author Directory:</strong> Browse through a comprehensive list of authors. Learn about their
            biographies, bibliographies, and more. Discover the stories behind your favorite writers and explore new
            ones.
          </li>
          <li>
            <strong>Book Collection:</strong> Explore a wide range of books available in our library. Filter by genre,
            author, or publication date to find exactly what you're looking for. Read reviews, summaries, and more to
            help you choose your next read.
          </li>
        </ul>
      </section>
      <section>
        <h2>Why Choose Our Library?</h2>
        <ul>
          <li>
            <strong>Extensive Collection:</strong> Access a vast database of books from various genres. Whether you're
            into fiction, non-fiction, or academic texts, we have something for everyone.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Enjoy a seamless and intuitive browsing experience. Our interface
            is designed to be easy to navigate, even for first-time users.
          </li>
          <li>
            <strong>Real-Time Updates:</strong> Get the latest information on book availability and new arrivals. Our
            system is updated in real-time to ensure you have the most current information.
          </li>
          <li>
            <strong>Secure and Reliable:</strong> Trust in our secure platform to protect your data and privacy. We use
            the latest security measures to ensure your information is safe.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MainPage;
