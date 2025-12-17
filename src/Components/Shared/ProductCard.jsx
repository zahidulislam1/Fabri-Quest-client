const ProductCard = () => {
  const products = [
    {
      productImage: "https://example.com/images/tshirt1.jpg",
      productName: "Classic Cotton T-Shirt",
      productCategory: "Garments",
      price: 650,
      availableQuantity: 3200,
      shortDesc: "Premium soft cotton t-shirt ideal for everyday wear.",
    },
    {
      productImage: "https://example.com/images/hoodie1.jpg",
      productName: "Premium Winter Hoodie",
      productCategory: "Hoodie",
      price: 450,
      availableQuantity: 1800,
      shortDesc: "Warm and stylish hoodie designed for winter comfort.",
    },
    {
      productImage: "https://example.com/images/jeans1.jpg",
      productName: "Slim Fit Blue Jeans",
      productCategory: "Pants",
      price: 285,
      availableQuantity: 2100,
      shortDesc: "High-quality denim jeans with a modern slim-fit design.",
    },
    {
      productImage: "https://example.com/images/shirt1.jpg",
      productName: "Formal White Shirt",
      productCategory: "Shirt",
      price: 550,
      availableQuantity: 5000,
      shortDesc: "Classic white shirt perfect for office & formal events.",
    },
    {
      productImage: "https://example.com/images/jacket1.jpg",
      productName: "Windproof Sports Jacket",
      productCategory: "Jacket",
      price: 220,
      availableQuantity: 1700,
      shortDesc: "Lightweight windproof jacket ideal for outdoor activities.",
    },
    {
      productImage: "https://example.com/images/cap1.jpg",
      productName: "Unisex Cotton Cap",
      productCategory: "Accessories",
      price: 300,
      availableQuantity: 6500,
      shortDesc: "Breathable unisex cotton cap for everyday style.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 px-15 bg-[#0b2b43]">
      {products.map((product, i) => (
        <div
          key={i}
          className="card bg-base-100 shadow-xl rounded-xl border hover:shadow-2xl transition duration-300"
        >
          <figure className="p-4">
            <img
              src={product.productImage}
              alt={product.productName}
              className="rounded-xl w-full h-48 object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-lg font-bold">
              {product.productName}
            </h2>

            <p className="text-sm text-gray-500">{product.shortDesc}</p>

            <div className="mt-2 text-sm">
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product.productCategory}
              </p>
              <p>
                <span className="font-semibold">Available:</span>{" "}
                {product.availableQuantity}pc
              </p>
              <p>
                <span className="font-semibold">Price:$</span>{" "}
                <span className="text-[#dc3545] font-medium">
                  {product.price}
                </span>
              </p>
            </div>

            <div className="card-actions justify-end mt-4">
              <button className="btn btn-sm bg-[#7bdcb5] border-none text-black rounded-full hover:bg-[#68c3a0]">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
