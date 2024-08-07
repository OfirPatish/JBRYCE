import axios from "axios";
import notify from "../../Utils/Notify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, validateAndDispatchJWT } from "../../Utils/JWTAuth";
import { appStore } from "../../Redux/store";
import { Book } from "../../Models/LibraryModels";
import "./DeleteBook.css";

function DeleteBook(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    } else if (appStore.getState().auth.role !== "Admin") {
      notify.error("Access denied. Admins only.");
      navigate("/");
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

  const handleDelete = async () => {
    if (selectedBookId !== null) {
      try {
        const token = getAuthToken();
        await axios.delete(`http://localhost:3001/api/v1/admin/deleteBook/${selectedBookId}`, {
          headers: {
            Authorization: token,
          },
        });
        notify.success("Book deleted successfully!");
        navigate("/books");
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          notify.error("Unauthorized access.");
          navigate("/");
        } else {
          notify.error("Failed to delete book.");
        }
      }
    }
  };

  return (
    <div className="DeleteBook">
      <h1>Delete Book</h1>
      <select onChange={(e) => setSelectedBookId(parseInt(e.target.value))}>
        <option value="">Select Book</option>
        {books.map((book: Book) => (
          <option key={book.BookID} value={book.BookID}>
            {book.Title}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete Book</button>
    </div>
  );
}

export default DeleteBook;
