import React from "react";
import { Waves, ShowerHead, Zap, UtensilsCrossed, Car } from "lucide-react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesAndFooter = () => {
  const features = [
    { name: "Sea View", icon: <Waves className="w-8 h-8 text-blue-300" /> },
    {
      name: "Geyser Anytime",
      icon: <ShowerHead className="w-8 h-8 text-blue-200" />,
    },
    {
      name: "24×7 Power Supply",
      icon: <Zap className="w-8 h-8 text-yellow-300" />,
    },
    {
      name: "Own Restaurant",
      icon: <UtensilsCrossed className="w-8 h-8 text-orange-300" />,
    },
    { name: "Car Parking", icon: <Car className="w-8 h-8 text-green-300" /> },
  ];

  return (
    <section
      id="features"
      className="relative py-24 px-6 text-center text-white bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Features Section */}
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Features
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl p-6 w-48 rounded-2xl flex flex-col items-center hover:bg-white/30 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {f.icon}
              <p className="mt-3 font-semibold text-white text-lg">{f.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer
        id="contact"
        className="relative px-6 md:px-16 lg:px-24 xl:px-32 w-full mt-24 text-gray-300"
      >
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-t border-white/30">
          {/* Left Section */}
          <div className="max-w-96">
            <h2 className="text-3xl font-bold text-blue-300 tracking-wide mb-4">
              SeaView Hotel
            </h2>
            <p className="mt-2 text-sm text-gray-200">
              Experience comfort and luxury by the sea. Enjoy breathtaking
              views, fine dining, and exceptional hospitality every time you
              stay with us.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold text-white mb-5">Quick Links</h2>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  <a href="/" className="hover:text-blue-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#rooms" className="hover:text-blue-300">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-blue-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-white mb-5">Contact Us</h2>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>Mandarmani, West Bengal, India</li>
                <li>+91 6297184342</li>
                <li>info@seaviewhotel.com</li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/1fPdUssb3fqT1BU99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300"
                  >
                    View on Map
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="py-4 text-center text-xs md:text-sm text-gray-400">
          © {new Date().getFullYear()} SeaView Hotel. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
};

export default FeaturesAndFooter;
