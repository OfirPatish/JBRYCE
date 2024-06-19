import { useEffect, useState } from "react";
import axios from "axios";
import notify from "../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import "./DeleteAuthor.css";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";

function DeleteAuthor(): JSX.Element {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    } else {
      const fetchAuthors = async () => {
        try {
          const response = await axios.get("http://localhost:8080/api/v1/authors/getAuthors");
          setAuthors(response.data);
        } catch (error) {
          notify.error("Failed to fetch authors.");
        }
      };
      fetchAuthors();
    }
  }, [navigate]);

  const handleDelete = async () => {
    if (selectedAuthorId !== null) {
      try {
        await axios.delete(`http://localhost:8080/api/v1/admin/deleteAuthor/${selectedAuthorId}`);
        notify.success("Author deleted successfully!");
        navigate("/authors");
      } catch (error) {
        notify.error("Failed to delete author.");
      }
    }
  };

  return (
    <div className="DeleteAuthor">
      <h1>Delete Author</h1>
      <select onChange={(e) => setSelectedAuthorId(parseInt(e.target.value))}>
        <option value="">Select Author</option>
        {authors.map((author: any) => (
          <option key={author.AuthorID} value={author.AuthorID}>
            {author.FirstName} {author.LastName}
          </option>
        ))}
      </select>
      <button onClick={handleDelete}>Delete Author</button>
    </div>
  );
}

export default DeleteAuthor;
