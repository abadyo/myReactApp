import React from "react";
import { useForm } from "react-hook-form";

function LoginForm({ checkLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const [data, setData] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });

  const submitForm = (data) => {
    checkLogin(data);
  };

  return (
    <React.Fragment>
      <div className="container my-5">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="form-group p-5 shadow-lg rounded border border-primary mx-3"
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              {...register("username", {
                required: "Wajib diisi",
                minLength: { value: 3, message: "Harus lebih dari 3 karakter" },
              })}
              aria-describedby="usernameErrors"
            />
            {errors.username && (
              <div id="usernameErrors" className="form-text text-danger">
                {errors.username.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              {...register("email", {
                required: "Wajib diisi",
                minLength: { value: 3, message: "Harus lebih dari 3 karakter" },
              })}
              aria-describedby="emailErrors"
            />
            {errors.email && (
              <div id="emailErrors" className="form-text text-danger">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              {...register("password", {
                required: "Wajib diisi",
                minLength: { value: 3, message: "Harus lebih dari 3 karakter" },
              })}
              aria-describedby="passwordErrors"
            />
            {errors.password && (
              <div id="passwordErrors" className="form-text text-danger">
                {errors.password.message}
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default LoginForm;
