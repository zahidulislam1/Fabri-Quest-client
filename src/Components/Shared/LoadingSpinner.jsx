import React from "react";

const LoadingSpinner = ({ size = "md" }) => {
  return (
    <div className="flex items-center h-screen justify-center py-10">
      <span
        className={`loading loading-spinner text-[#7bdcb5] loading-${size}`}
      ></span>
    </div>
  );
};

export default LoadingSpinner;
