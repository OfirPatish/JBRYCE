import axios from "axios";
import notify from "../../Utils/Notify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthToken, validateAndDispatchJWT } from "../../Utils/JWTAuth";
import { Author } from "../../Models/LibraryModels";
import "./Authors.css";

function Authors(): JSX.Element {
  const [authors, setAuthors] = useState<Author[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
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
