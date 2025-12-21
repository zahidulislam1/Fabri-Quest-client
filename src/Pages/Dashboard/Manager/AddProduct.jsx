import React from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../Utils";
import useAuth from "../../../Hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/Shared/LoadingSpinner";
import ErrorPage from "../../ErrorPage";

const AddProduct = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  //useMutation hook use case
  const {
    isPending,
    isError,
    mutateAsync,
    reset: mutationReset,
  } = useMutation({
    mutationFn: async (payload) => await axiosSecure.post(`/products`, payload),
    onSuccess: (data) => {
      console.log(data);
      // show toast

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      // navigate to my inventory page
      mutationReset();
      // Query key invalidate
    },
    onError: (error) => {
      console.log(error);
    },
    onMutate: (payload) => {
      console.log(payload);
    },
    onSettled: (data, error) => {
      console.log(data)
      if (error) console.log(error);
    },
    retry: 3,
  });
  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const {
      title,
      description,
      quantity,
      price,
      category,
      image,
      videoLink,
      moq,
      payment,
    } = data;
    const imageFile = image[0];
    try {
      const imageUrl = await imageUpload(imageFile);
      const productData = {
        image: imageUrl,
        title,
        description,
        quantity: Number(quantity),
        moq: Number(moq),
        price: Number(price),
        category,
        payment,
        videoLink,
        managerDetail: {
          image: user?.photoURL,
          name: user?.displayName,
          email: user?.email,
        },
      };

      await mutateAsync(productData);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  if (isPending) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* Product Name / Title */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">
              Product Title
            </label>
            <input
              className="w-full px-4 py-3 border border-[#7bdcb5] rounded-md"
              type="text"
              placeholder="Product title"
              {...register("title", { required: "Product title is required" })}
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">Category</label>
            <select
              className="w-full px-4 py-3 border border-[#7bdcb5] rounded-md"
              {...register("category", { required: "Category is required" })}
            >
              <option value="">Select Category</option>
              <option value="Shirt">Shirt</option>
              <option value="Pant">Pant</option>
              <option value="Jacket">Jacket</option>
              <option value="Accessories">Accessories</option>
            </select>
            {errors.category && (
              <p className="text-xs text-red-500">{errors.category.message}</p>
            )}
          </div>

          {/* Product Description */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">
              Product Description
            </label>
            <textarea
              className="w-full h-32 px-4 py-3 border border-[#7bdcb5] rounded-md"
              placeholder="Write product details..."
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
          {/* Price */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">
              {" "}
              Product Price
            </label>
            <input
              className="w-full px-4 py-3 border border-[#7bdcb5] rounded-md"
              type="number"
              placeholder="Price per unit"
              {...register("price", {
                required: "Price is required",
                min: 0,
              })}
            />
            {errors.price && (
              <p className="text-xs text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Demo Video Link (Optional) */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">
              Demo Video Link (Optional)
            </label>
            <input
              className="w-full px-4 py-3 border border-[#7bdcb5] rounded-md"
              type="url"
              placeholder="https://youtube.com/..."
              {...register("videoLink")}
            />
          </div>

          {/* Available Quantity */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">
              Available Quantity
            </label>
            <input
              className="w-full px-4 py-3 border border-[#7bdcb5] rounded-md"
              type="number"
              placeholder="Available stock"
              {...register("quantity", {
                required: "Quantity is required",
                min: 1,
              })}
            />
          </div>

          {/* MOQ */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">
              Minimum Order Quantity (MOQ)
            </label>
            <input
              className="w-full px-4 py-3 border border-[#7bdcb5] rounded-md"
              type="number"
              placeholder="Minimum order quantity"
              {...register("moq", {
                required: "MOQ is required",
                min: 1,
              })}
            />
          </div>

          {/* Payment Options */}
          <div className="space-y-1 text-sm">
            <label className="block font-medium text-gray-600">
              Payment Options
            </label>
            <select
              className="w-full px-4 py-3 border border-[#7bdcb5] rounded-md"
              {...register("payment", { required: true })}
            >
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="PayFirst">Pay First</option>
            </select>
          </div>

          {/* Images Upload (Multiple) */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-600 text-sm">
              Product Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="file-input file-input-bordered w-full"
              {...register("image", { required: "Image are required" })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full p-3 mt-4 font-medium bg-[#7bdcb5] hover:bg-[#6ac9a4] text-[#0b2b43]   rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            Save Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
