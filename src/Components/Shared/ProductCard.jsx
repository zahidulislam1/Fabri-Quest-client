import { NavLink } from "react-router";

const ProductCard = ({ product }) => {
  const { image, title, description, category, price, quantity, _id } = product;
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl border border-[#7bdcb5] hover:shadow-2xl transition duration-300">
      <figure className="p-4">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>

        <p className="text-sm text-gray-500">{description}</p>

        <div className="mt-2 text-sm">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Available:</span> {quantity}pc
          </p>
          <p>
            <span className="font-semibold">Price:$</span>{" "}
            <span className="text-[#dc3545] font-medium">{price}</span>
          </p>
        </div>

        <div className="card-actions justify-end mt-4">
          <NavLink
            to={`/product-details/${_id}`}
            className="btn btn-sm bg-[#7bdcb5] border-none text-black rounded-full hover:bg-[#68c3a0]"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
