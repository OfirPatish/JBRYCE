import axios from "axios";
import notify from "../../Utils/Notify";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAuthToken, validateAndDispatchJWT } from "../../Utils/JWTAuth";
import { appStore } from "../../Redux/store";
import "./AddAuthor.css";

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
    } else if (appStore.getState().auth.role !== "Admin") {
      notify.error("Access denied. Admins only.");
      navigate("/");
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<AuthorFormInputs> = async (data) => {
    try {
      const token = getAuthToken();
      await axios.post("http://localhost:3001/api/v1/admin/addAuthor", data, {
        headers: {
          Authorization: token,
        },
      });
      notify.success("Author added successfully!");
      navigate("/authors");
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        notify.error("Unauthorized access.");
        navigate("/");
      } else {
        notify.error("Failed to add author.");
      }
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
