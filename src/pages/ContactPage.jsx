import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Map + Info */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3582.484977354414!2d87.699908!3d21.663204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM5JzQ3LjUiTiA4N8KwNDEnNTkuNyJF!5e1!3m2!1sen!2sin!4v1761740899929!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-4 text-gray-200">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" />
                <p>Mandarmani, West Bengal, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" />
                <p>+91 6297184342</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" />
                <p>info@seaviewhotel.com</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.form
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
