import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import notify from "../../Utils/Notify";
import axios from "axios";
import "./Register.css";

type UserCredentials = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
};

function Register(): JSX.Element {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>();

  const handleRegister: SubmitHandler<UserCredentials> = (data) => {
    if (data.password !== data.confirmPassword) {
      notify.error("Passwords do not match.");
      return;
    }

    const registrationData = {
      username: data.username.toLowerCase(),
      password: data.password,
      email: data.email,
    };

    axios
      .post("http://localhost:8080/api/v1/auth/register", registrationData)
      .then((response) => {
        notify.success("Registration successful. You can now log in.");
        navigate("/");
      })
      .catch((error) => {
        notify.error("Registration failed. Please try again.");
      });
  };

  const usernameValidationRules = {
    required: true,
    minLength: 4,
    maxLength: 10,
  };

  const passwordValidationRules = {
    required: true,
    minLength: 5,
    maxLength: 10,
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <hr />
      <form onSubmit={handleSubmit(handleRegister)}>
        <input type="text" placeholder="Username" {...register("username", usernameValidationRules)} />
        {errors.username?.type === "required" && (
          <>
            <br />
            <span style={{ color: "red" }}>You must enter a username</span>
          </>
        )}
        {errors.username?.type === "minLength" && (
          <>
            <br />
            <span style={{ color: "red" }}>Username must be at least 4 characters</span>
          </>
        )}
        {errors.username?.type === "maxLength" && (
          <>
            <br />
            <span style={{ color: "red" }}>Username must be at most 10 characters</span>
          </>
        )}

        <input type="password" placeholder="Password" {...register("password", passwordValidationRules)} />
        {errors.password?.type === "required" && (
          <>
            <br />
            <span style={{ color: "red" }}>You must enter a password</span>
          </>
        )}
        {errors.password?.type === "minLength" && (
          <>
            <br />
            <span style={{ color: "red" }}>Password must be at least 5 characters</span>
          </>
        )}
        {errors.password?.type === "maxLength" && (
          <>
            <br />
            <span style={{ color: "red" }}>Password must be at most 10 characters</span>
          </>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", passwordValidationRules)}
        />
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
