import React from "react";
import { Snowflake, Wind } from "lucide-react";
import { motion } from "framer-motion";

const Rooms = () => {
  return (
    <section
      id="rooms"
      className="relative py-10 px-6 text-center text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg')", // same bg as Features
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Rooms
        </motion.h2>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* AC Rooms */}
          <motion.div
            className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-xl overflow-hidden border border-white/30 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg"
              alt="AC Room"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500/30 p-4 rounded-full">
                  <Snowflake className="text-blue-200 w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">AC Rooms</h3>
              <p className="text-gray-200 mb-5">
                12 luxurious air-conditioned rooms with panoramic sea views,
                elegant interiors, and premium amenities for your comfort.
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full font-semibold transition"
              >
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Non-AC Rooms */}
          <motion.div
            className="backdrop-blur-lg bg-white/20 rounded-3xl shadow-xl overflow-hidden border border-white/30 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg"
              alt="Non AC Room"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500/30 p-4 rounded-full">
                  <Wind className="text-yellow-200 w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Non-AC Rooms</h3>
              <p className="text-gray-200 mb-5">
                6 cozy and comfortable rooms with a relaxing ambiance and
                excellent value — perfect for budget travelers.
              </p>
              <a
                href="#contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
