import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../Components/Shared/LoadingSpinner";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/products/${id}`
      );
      return result.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  if (!product)
    return <p className="text-center text-red-500">Product not found</p>;

  const {
    image,
    title,
    description,
    category,
    price,
    quantity,
    moq,
    payment,
    videoLink,
    managerDetails,
  } = product;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Details Section */}
        <div className="bg-base-100 p-6 rounded-xl shadow space-y-4">
          <h1 className="text-3xl font-bold text-[#0b2b43]">{title}</h1>
          <p className="text-gray-500">{description}</p>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Available Quantity:</span>{" "}
              {quantity} pcs
            </p>
            <p>
              <span className="font-semibold">Minimum Order:</span> {moq || 1}{" "}
              pcs
            </p>
            <p>
              <span className="font-semibold">Payment Option:</span> {payment}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-[#dc3545] font-bold">${price}</span>
            </p>
          </div>

          {/* Manager Details */}
          <h1 className="font-semibold">Contact Details</h1>
          {managerDetails && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg flex items-center gap-4">
              <img
                src={managerDetails.image}
                alt={managerDetails.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{managerDetails.name}</p>
                <p className="text-sm text-gray-600">{managerDetails.email}</p>
              </div>
            </div>
          )}

          <button className="btn bg-[#7bdcb5] border-none text-black rounded-full px-6 hover:bg-[#68c3a0] mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
