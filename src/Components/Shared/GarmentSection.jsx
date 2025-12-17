import "animate.css";

const GarmentSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-15">
      <div className="grid md:grid-cols-2 gap-10 rounded-3xl overflow-hidden shadow-lg">
        {/* LEFT IMAGE */}
        <div className="animate__animated animate__fadeInLeft animate__slow">
          <img
            src="https://media.gettyimages.com/id/1026775352/photo/clothes-manufacturing-at-the-hnin-shwe-kyar-garment-factory.jpg?s=612x612&w=gi&k=20&c=PPgnQGonLBs-VpvZ6VOOAr8wFrLNEoh9RkWwdWCXznw="
            alt="How it works"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#0b2b43] text-white p-10 animate__animated animate__fadeInRight animate__slow">
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>

          {/* STEP 1 */}
          <div className="flex gap-4 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0b2b43] font-bold">
              1
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">
                Design & Fabric Selection
              </h4>
              <p className="text-gray-300">
                Our experts create modern designs and carefully select
                high-quality fabrics to ensure comfort and durability.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-4 mb-6 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0b2b43] font-bold">
              2
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">
                Cutting & Stitching
              </h4>
              <p className="text-gray-300">
                Precision cutting and skilled stitching are performed using
                advanced machinery and experienced workers.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-4 animate__animated animate__fadeInUp animate__delay-3s">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0b2b43] font-bold">
              3
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">
                Quality Check & Packaging
              </h4>
              <p className="text-gray-300">
                Each garment goes through strict quality inspection before being
                carefully packed and prepared for delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarmentSection;
