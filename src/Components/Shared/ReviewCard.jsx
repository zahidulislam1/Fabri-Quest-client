import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, rating, review: text, location, date } = review;

  return (
    <div className="bg-white p-6  rounded-2xl shadow-md hover:shadow-xl transition duration-300">
      {/* Rating */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-sm ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4">“{text}”</p>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-4">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-[#0b2b43] text-white flex items-center justify-center font-semibold">
          {name.charAt(0)}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#6ac9a4]">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>

      {/* Date */}
      <p className="text-xs text-gray-400 mt-3">{date}</p>
    </div>
  );
};

export default ReviewCard;
