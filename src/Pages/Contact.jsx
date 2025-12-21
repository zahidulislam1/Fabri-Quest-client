import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0b2b43] flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#0b2b43] mb-2 text-center">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions about our garments or services? We’d love to hear from
          you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#0b2b43] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-2">📍 Address: Dhaka, Bangladesh</p>
            <p className="text-gray-700 mb-2">
              📧 Email: support@fabriquest.com
            </p>
            <p className="text-gray-700 mb-2">📞 Phone: +880 1234 567 890</p>
            <p className="text-gray-700 mt-4">
              Our team is available Sunday to Thursday, 9:00 AM – 6:00 PM.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
            ></textarea>

            <button className="btn bg-[#7bdcb5] hover:bg-[#6ac9a4] text-[#0b2b43] w-full rounded-full border-none">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
