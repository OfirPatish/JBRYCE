import { useEffect, useState } from "react";
import axios from "axios";
import notify from "../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import "./DeleteBook.css";
import { appStore } from "../../Redux/store";
import { Book } from "../../Models/LibraryModels";

function DeleteBook(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    } else {
      const state = appStore.getState();
      if (state.auth.role !== "Admin") {
        notify.error("Access denied. Admins only.");
        navigate("/");
      } else {
        const fetchBooks = async () => {
          try {
            const response = await axios.get("http://localhost:8080/api/v1/books/getBooks");
            setBooks(response.data);
          } catch (error) {
            notify.error("Failed to fetch books.");
          }
        };
        fetchBooks();
      }
    }
  }, [navigate]);

  const handleDelete = async () => {
    if (selectedBookId !== null) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/admin/deleteBook/${selectedBookId}`);
        notify.success("Book deleted successfully!");
        navigate("/books");
      } catch (error) {
        notify.error("Failed to delete book.");
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
