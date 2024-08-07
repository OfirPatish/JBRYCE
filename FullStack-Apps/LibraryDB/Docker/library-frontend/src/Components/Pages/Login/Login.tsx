import axios from "axios";
import notify from "../../Utils/Notify";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { appStore } from "../../Redux/store";
import { createUserLoginAction } from "../../Redux/AuthReducer";
import "./Login.css";

function Login(): JSX.Element {
  const navigate = useNavigate();

  type UserCredentials = {
    username: string;
    password: string;
    role: string;
    rememberMe: boolean;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>();

  const handleLogin: SubmitHandler<UserCredentials> = (credentials) => {
    axios
      .post("http://localhost:3001/api/v1/auth/login", {
        username: credentials.username.toLowerCase(),
        password: credentials.password,
      })
      .then((response) => {
        appStore.dispatch(createUserLoginAction(response.data));
        const token = response.headers["authorization"];
        if (credentials.rememberMe) {
          localStorage.setItem("jwt", token);
        } else {
          localStorage.removeItem("jwt");
          sessionStorage.setItem("jwt", token);
        }
        notify.success("Welcome back!");
        navigate("/");
      })
      .catch((error) => {
        notify.error("Invalid credentials. Please try again.");
      });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true, minLength: 4, maxLength: 10 })}
        />
        {errors.username && (
          <>
            <br />
            <span>Please enter a valid username (4-10 characters).</span>
          </>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 5, maxLength: 10 })}
        />
        {errors.password && (
          <>
            <br />
            <span>Please enter a valid password (5-10 characters).</span>
          </>
        )}
        <label>
          <input type="checkbox" {...register("rememberMe")} />
          Remember me
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
