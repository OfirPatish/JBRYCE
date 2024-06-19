import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import notify from "../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";
import "./AddBook.css";
import { appStore } from "../../Redux/store";
import { Author } from "../../Models/LibraryModels";

type BookFormInputs = {
  AuthorID: number;
  Title: string;
  PageCount: number;
  Price: number;
};

function AddBook(): JSX.Element {
  const [authors, setAuthors] = useState<Author[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormInputs>();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    } else {
      const state = appStore.getState();
      if (state.auth.role !== "Admin") {
        notify.error("Access denied. Admins only.");
        navigate("/");
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
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<BookFormInputs> = async (data) => {
    try {
      await axios.post("http://localhost:8080/api/v1/admin/addBook", data);
      notify.success("Book added successfully!");
      navigate("/books");
    } catch (error) {
      notify.error("Failed to add book.");
    }
  };

  return (
    <div className="AddBook">
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("AuthorID", { required: true })}>
          <option value="">Select Author</option>
          {authors.map((author: Author) => (
            <option key={author.AuthorID} value={author.AuthorID}>
              {author.FirstName} {author.LastName}
            </option>
          ))}
        </select>
        {errors.AuthorID && <span>Author is required</span>}

        <input type="text" placeholder="Title" {...register("Title", { required: true })} />
        {errors.Title && <span>Title is required</span>}

        <input type="number" placeholder="Page Count" {...register("PageCount", { required: true, min: 1 })} />
        {errors.PageCount && <span>Page count must be positive</span>}

        <input type="number" placeholder="Price" {...register("Price", { required: true, min: 0 })} />
        {errors.Price && <span>Price cannot be negative</span>}

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
