import { useEffect, useState } from "react";
import axios from "axios";
import notify from "../../Utils/Notify";
import "./Authors.css";
import { useNavigate } from "react-router-dom";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import { Author } from "../../Models/LibraryModels";

function Authors(): JSX.Element {
  const [authors, setAuthors] = useState<Author[]>([]);
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

  return (
    <div className="Authors">
      <h1>Explore Our Esteemed Authors</h1>
      <ul>
        {authors.map((author: Author) => (
          <li key={author.AuthorID}>
            {author.FirstName} {author.LastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Authors;
