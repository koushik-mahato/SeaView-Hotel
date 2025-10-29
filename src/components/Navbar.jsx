import { Phone, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="fixed flex justify-between bg-transparent text-white w-full shadow-none backdrop-blur-sm z-50">
        <div className="px-6 xl:px-12 py-5 flex w-full items-center">
          {/* Logo */}
          <a className="text-3xl font-bold font-heading tracking-wide" href="/">
            SeaView Hotel
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a className="hover:text-blue-400" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#rooms">
                Rooms
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-blue-400" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden xl:flex items-center space-x-6">
            <a
              href="tel:+916297184342"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>

            <a
              href="https://maps.app.goo.gl/1fPdUssb3fqT1BU99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <MapPin className="h-5 w-5" />
              <span>Find Us</span>
            </a>

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg font-semibold transition"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden flex items-center pr-4">
          <button className="text-white hover:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
