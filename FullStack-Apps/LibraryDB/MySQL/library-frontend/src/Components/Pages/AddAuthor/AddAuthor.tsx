import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import notify from "../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import "./AddAuthor.css";
import { useEffect } from "react";
import { validateAndDispatchJWT } from "../../Utils/JWTUtils";

type AuthorFormInputs = {
  FirstName: string;
  LastName: string;
};

function AddAuthor(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthorFormInputs>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!validateAndDispatchJWT()) {
      navigate("/login");
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<AuthorFormInputs> = async (data) => {
    try {
      await axios.post("http://localhost:8080/api/v1/admin/addAuthor", data);
      notify.success("Author added successfully!");
      navigate("/authors");
    } catch (error) {
      notify.error("Failed to add author.");
    }
  };

  return (
    <div className="AddAuthor">
      <h1>Add New Author</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First Name" {...register("FirstName", { required: true })} />
        {errors.FirstName && <span>First Name is required</span>}
        <input type="text" placeholder="Last Name" {...register("LastName", { required: true })} />
        {errors.LastName && <span>Last Name is required</span>}
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
}

export default AddAuthor;
