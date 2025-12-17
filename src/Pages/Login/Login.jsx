import React from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router";
// import SocialLogin from "../SocialLogin/SocialLogin";
import "animate.css";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const { logIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    logIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b2b43] px-4">
      <div className="grid md:grid-cols-2 max-w-4xl w-full bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
        {/* LEFT SIDE */}
        <div className="p-8 animate__animated animate__fadeInLeft">
          <h3 className="text-3xl font-bold text-center mb-2">Please Login</h3>
          <p className="text-center text-gray-500 mb-6">
            Access your production dashboard
          </p>

          <form onSubmit={handleSubmit(handleLogin)}>
            {/* Email */}
            <label className="label"> Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full mb-2"
              placeholder="factory@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">Email is required</p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full mb-2"
              placeholder="Enter secure password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mb-2">
                Password must be at least 6 characters
              </p>
            )}

            <div className="text-right mb-4">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

            <button className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-black w-full rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95">
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Create a New Account{" "}
            <Link
              to="/signup"
              state={location.state}
              className="text-blue-500 underline"
            >
              SignUp
            </Link>
          </p>

          <div className="mt-4">{/* <SocialLogin /> */}</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:block animate__animated animate__fadeInRight">
          <img
            src="https://media.gettyimages.com/id/1402206158/photo/pieces-of-the-colored-leathers-raw-materials-for-manufacture.jpg?s=612x612&w=gi&k=20&c=xZXR_kqQi8nkBQKUCegquU3PmnUtiuwD9Is25pd1oho="
            alt="Garments factory"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
