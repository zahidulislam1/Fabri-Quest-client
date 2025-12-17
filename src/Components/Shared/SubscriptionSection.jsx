const SubscriptionSection = () => {
  return (
    <section
      className="relative mt-10 bg-center bg-cover rounded-3xl overflow-hidden"
      style={{
        backgroundImage:
          "url('https://media.gettyimages.com/id/2185667617/photo/cambodians-busy-at-work-at-chinese-funded-textile-factory.jpg?s=612x612&w=gi&k=20&c=D1g3mOnHVKLU1v8zv-zOrXtXMgz1MXpZcUmkhoXKGR8=')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0b2b43]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Stay Connected With Our Factory
        </h2>

        <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates on our latest garments production,
          quality standards, and new collections.
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5 py-4 rounded-full text-gray-800  bg-white"
            required
          />

          <button
            type="submit"
            className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-black  px-6 py-4 rounded-full shadow-lg border-none transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscriptionSection;
