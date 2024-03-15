import { SubmitHandler, useForm } from "react-hook-form";
import "./Register.css";

type RegisterFormInputs = {
  userName: string;
  userPassword: string;
  address: string;
  age: number;
  city: string;
  country: string;
  userLocation: string;
};

function Register(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const handleRegisterFormSubmit: SubmitHandler<RegisterFormInputs> = (data) => console.log(data);

  return (
    <div className="Register">
      <h2>Register</h2>
      <hr />

      <form onSubmit={handleSubmit(handleRegisterFormSubmit)}>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("userName", {
            required: "Username is required",
            minLength: { value: 8, message: "Username must be at least 8 characters" },
            maxLength: { value: 16, message: "Username must be at most 16 characters" },
          })}
        />
        {errors.userName && <span className="ErrorText">{errors.userName.message}</span>}
        <br />

        <input
          type="password"
          placeholder="Enter your password"
          {...register("userPassword", {
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
            maxLength: { value: 16, message: "Password must be at most 16 characters" },
          })}
        />
        {errors.userPassword && <span className="ErrorText">{errors.userPassword.message}</span>}
        <br />

        <input
          type="text"
          placeholder="Enter your address"
          {...register("address", {
            required: "Address is required",
            minLength: { value: 5, message: "Address must be at least 5 characters" },
          })}
        />
        {errors.address && <span className="ErrorText">{errors.address.message}</span>}
        <br />

        <input
          type="number"
          placeholder="Enter your age"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Age must be at least 18" },
            max: { value: 120, message: "Age must be at most 120" },
          })}
        />
        {errors.age && <span className="ErrorText">{errors.age.message}</span>}
        <br />

        <input
          type="text"
          placeholder="Enter your city"
          {...register("city", { minLength: { value: 5, message: "City name must be at least 5 characters" } })}
        />
        {errors.city && <span className="ErrorText">{errors.city.message}</span>}
        <br />

        <input
          type="text"
          placeholder="Enter your country"
          {...register("country", { minLength: { value: 5, message: "Country name must be at least 5 characters" } })}
        />
        {errors.country && <span className="ErrorText">{errors.country.message}</span>}
        <br />

        <select {...register("userLocation", { required: "Location is required" })}>
          <option value="">Select location</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="Center">Center</option>
        </select>
        {errors.userLocation && <span className="ErrorText">{errors.userLocation.message}</span>}
        <br />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
