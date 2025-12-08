import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Decorative Top Wave */}
      <div className="absolute top-[-60px] w-full">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#0b2b43"
            d="M0,40 C360,120 1080,-40 1440,40 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Footer Main Background */}
      <div className="bg-[#0b2b43] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Brand Section */}
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-4xl font-extrabold text-[#7bdcb5] tracking-wide">
              <img className="w-13 bg-cover" src={logo} alt="" />
              FabriQuest
            </h2>
            <p className="mt-3 text-white/80 text-sm leading-relaxed">
              Redefining garment manufacturing with precision, creativity, and
              world-class craftsmanship.
            </p>
          </div>

          {/* Navigation */}
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 tracking-wide">
              Explore
            </h3>
            <ul className="space-y-3 text-white/80">
              {["Home", "About", "Products", "Services", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#7bdcb5] transition duration-300"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-white/80">📧 info@fabriquest.com</p>
            <p className="text-white/80">📞 +880 1234 567 890</p>
            <p className="text-white/80 mt-2">📍 Dhaka, Bangladesh</p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7bdcb5] hover:text-black cursor-pointer transition">
                <FaFacebookF size={18} />
              </div>

              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7bdcb5] hover:text-black cursor-pointer transition">
                <FaLinkedinIn size={18} />
              </div>

              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7bdcb5] hover:text-black cursor-pointer transition">
                <FaInstagram size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center mt-10 text-white/60 border-t border-white/20 pt-5">
          © {new Date().getFullYear()} FabriQuest — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
