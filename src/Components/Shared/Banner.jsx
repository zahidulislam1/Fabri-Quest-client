import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Premium Garments Manufacturing",
    text: "Crafting world-class apparel with precision and quality.",
    image: "https://i.ibb.co.com/QR5QVp4/garment2.jpg",
  },
  {
    id: 2,
    title: "High-Quality Fabric Production",
    text: "We source and produce the finest fabrics for global brands.",
    image:
      "https://media.gettyimages.com/id/1145772296/photo/mid-adult-tailor-cutting-denim-around-a-pattern-in-preparation-to-make-a-pair-of-jeans.jpg?s=612x612&w=0&k=20&c=cLh1N1PqU0B1H6GAgGMhaG8xP5yktpGARraIEIGiu1c=",
  },
  {
    id: 3,
    title: "Modern Stitching Technology",
    text: "Advanced machinery ensures perfect finishing in every piece.",
    image: "https://i.ibb.co.com/ymyMcjrS/garments1.jpg",
  },
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slide Wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0b2b43]/60" />

          {/* Text Left Side */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative z-10 h-full flex flex-col justify-center ml-12 max-w-xl text-white"
          >
            <h1 className="text-5xl font-bold leading-tight text-[#7bdcb5]">
              {slides[index].title}
            </h1>

            <p className="text-lg mt-4">{slides[index].text}</p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn w-40 bg-[#7bdcb5] border-none text-black mt-6 rounded-full shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === i ? "bg-[#7bdcb5] scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
