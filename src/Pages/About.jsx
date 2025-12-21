import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0b2b43] flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#0b2b43] mb-4 text-center">
          About FabriQuest
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          FabriQuest is a modern garment-focused platform dedicated to
          connecting quality apparel with people who value craftsmanship,
          comfort, and style. We believe clothing is more than fabric—it’s a
          reflection of confidence and identity.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          Our journey started with a simple goal: to make reliable, well-made
          garments accessible through a smooth and transparent experience. From
          sourcing materials to final delivery, we focus on quality at every
          step.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether you are exploring everyday wear or premium collections,
          FabriQuest is committed to delivering value, trust, and satisfaction
          to every customer.
        </p>
      </div>
    </div>
  );
};

export default About;
