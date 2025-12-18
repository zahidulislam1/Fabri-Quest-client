import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router";

import axios from "axios";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "animate.css";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/Shared/SocialLogin";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // const axiosSecure = useAxiosSecure();

  const handleRegistration = (data) => {
    const profileImg = data.photo[0];

    createUser(data.email, data.password)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL,
          };
          console.log(userInfo);
          // axiosSecure.post("/users", userInfo);

          updateUserProfile({
            displayName: data.name,
            photoURL,
          }).then(() => {
            navigate(location.state || "/");
          });
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b2b43] px-4 py-8">
      <div className="grid md:grid-cols-2 max-w-5xl w-full bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
        {/* LEFT — REGISTER FORM */}
        <div className="p-8 animate__animated animate__fadeInLeft">
          <h3 className="text-3xl font-bold text-[#0b2b43] text-center mb-2">
            Registration
          </h3>
          <p className="text-center text-gray-500 mb-6">Create your account</p>

          <form onSubmit={handleSubmit(handleRegistration)}>
            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full mb-2"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}

            {/* Photo */}
            <label className="label">Your Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full mb-2"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">Photo is required</p>
            )}

            {/* Email */}
            <label className="label"> Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full mb-2"
              placeholder="factory@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}

            {/* Password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                })}
                className="input input-bordered w-full mb-2"
                placeholder="password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[7px] top-[35px] cursor-pointer z-50"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  Minimum 6 characters required
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Must include uppercase, lowercase, number & special character
                </p>
              )}
            </div>

            <button className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-[#0b2b43] w-full rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95 mt-4">
              SignUp
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              state={location.state}
              className="text-[#7bdcb5] underline"
            >
              Login
            </Link>
          </p>

          <div className="mt-4">
            <SocialLogin />
          </div>
        </div>

        {/* RIGHT — GARMENTS IMAGE */}
        <div className="hidden md:block animate__animated animate__fadeInRight">
          <img
            src="https://media.gettyimages.com/id/1219442528/photo/garment-manufacturing-at-the-thai-son-s-p-factory-as-growth-may-exceed-expectations.jpg?s=612x612&w=gi&k=20&c=KHnXlsnNY0YVz61ieheKr2qDmMHqt0ZRhpIA0jj4GdM="
            alt="Garments factory"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
