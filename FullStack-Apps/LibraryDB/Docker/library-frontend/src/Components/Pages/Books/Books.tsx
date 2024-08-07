import axios from "axios";
import notify from "../../Utils/Notify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, validateAndDispatchJWT } from "../../Utils/JWTAuth";
import { Book } from "../../Models/LibraryModels";
import "./Books.css";

function Books(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    } else {
      const fetchBooks = async () => {
        try {
          const token = getAuthToken();
          const response = await axios.get("http://localhost:3001/api/v1/books/getBooks", {
            headers: {
              Authorization: token,
            },
          });
          setBooks(response.data);
        } catch (error: any) {
          if (error.response && error.response.status === 401) {
            notify.error("Unauthorized access.");
            navigate("/");
          } else {
            notify.error("Failed to fetch books.");
          }
        }
      };
      fetchBooks();
    }
  }, [navigate]);

  return (
    <div className="Books">
      <h1>Explore Our Collection of Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Page Count</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book) => (
            <tr key={book.BookID}>
              <td>{book.Title}</td>
              <td>
                {book.FirstName} {book.LastName}
              </td>
              <td>{book.PageCount}</td>
              <td>${Number(book.Price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
