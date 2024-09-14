"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content"; // SweetAlert2 React integration

const MySwal = withReactContent(Swal); // Initialize SweetAlert2 with React

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5003/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const result = await response.json();
      if (response.ok == true) {
        // Show success message with SweetAlert2
        MySwal.fire({
          title: "Success!",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
        window.location.replace("/profile");
      } else {
        // Show error message from API using SweetAlert2
        MySwal.fire({
          title: "Error",
          text: result.message || "Login failed, please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      // Handle network or unexpected errors
      MySwal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen">
      <div className="  max-w-[500px] sm:w-[500px] mx-auto bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 mb-8">
          Welcome to Exorset
        </h1>
        <p>Please Login</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex items-start flex-col justify-start">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>

          <div className="flex items-start flex-col justify-start">
            <label htmlFor="password" className="text-sm text-gray-700">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              id="password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>

          {/* Toggle Show/Hide Password */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              className="mr-2"
              onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">
              {showPassword ? "Hide Password" : "Show Password"}
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
