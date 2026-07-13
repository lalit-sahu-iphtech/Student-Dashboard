import { useContext } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schema/loginSchema";

import { AuthContext } from "../context/AuthProvider";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data) {
    login(data);

    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login Page</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}

          <input type="text" placeholder="Enter Name" {...register("name")} />

          {errors.name && <p className="error">{errors.name.message}</p>}

          {/* Email */}

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />

          {errors.email && <p className="error">{errors.email.message}</p>}

          {/* Password */}

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />

          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
