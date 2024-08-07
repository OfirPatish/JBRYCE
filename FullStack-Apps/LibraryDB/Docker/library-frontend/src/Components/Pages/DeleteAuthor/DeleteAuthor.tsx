import axios from "axios";
import notify from "../../Utils/Notify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, validateAndDispatchJWT } from "../../Utils/JWTAuth";
import { appStore } from "../../Redux/store";
import { Author } from "../../Models/LibraryModels";
import "./DeleteAuthor.css";

function DeleteAuthor(): JSX.Element {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [selectedAuthorId, setSelectedAuthorId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    } else if (appStore.getState().auth.role !== "Admin") {
      notify.error("Access denied. Admins only.");
      navigate("/");
    } else {
      const fetchAuthors = async () => {
        try {
          const token = getAuthToken();
          const response = await axios.get("http://localhost:3001/api/v1/authors/getAuthors", {
            headers: {
              Authorization: token,
            },
          });
          setAuthors(response.data);
        } catch (error: any) {
          if (error.response && error.response.status === 401) {
            notify.error("Unauthorized access.");
            navigate("/");
          } else {
            notify.error("Failed to fetch authors.");
          }
        }
      };
      fetchAuthors();
    }
  }, [navigate]);

  const handleDelete = async () => {
    if (selectedAuthorId !== null) {
      try {
        const token = getAuthToken();
        await axios.delete(`http://localhost:3001/api/v1/admin/deleteAuthor/${selectedAuthorId}`, {
          headers: {
            Authorization: token,
          },
        });
        notify.success("Author deleted successfully!");
        navigate("/authors");
      } catch (error: any) {
        if (error.response && error.response.status === 401) {
          notify.error("Unauthorized access.");
          navigate("/");
        } else {
          notify.error("Failed to delete author.");
        }
      }
    }
  };

  return (
    <div className="DeleteAuthor">
      <h1>Delete Author</h1>
      <select onChange={(e) => setSelectedAuthorId(parseInt(e.target.value))}>
        <option value="">Select Author</option>
        {authors.map((author: Author) => (
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
