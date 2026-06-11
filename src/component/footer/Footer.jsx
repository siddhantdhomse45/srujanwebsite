import { NavLink } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}

          <div>
            <img
                src="https://srujaninfotech.in/images/logo11.png"
                alt="Logo"
                className="h-15 w-auto object-contain"
              />

            <p className="text-gray-300 leading-7">
              We provide innovative software solutions,
              web development, mobile applications,
              cloud services, and digital transformation
              for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-3xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "Services",
                "Technologies",
                "Products",
                "EduPro",
                "TMS",
                "Courier-Pro",
                "Sitemap",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to="/"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <ChevronRight size={16} />
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* About Company */}

          <div>
            <h3 className="text-3xl font-bold mb-6">
              About Company
            </h3>

            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Services",
                "Products",
                "Portfolio",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to="/"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <ChevronRight size={16} />
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-3xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-cyan-400 mt-1"
                />
                <div>
                  <p className="text-gray-300 leading-7">
                    <span className="font-semibold text-white">
                      Head Office:
                    </span>{" "}
                    D-88/5, Pocket D,
                    Okhla Phase I,
                    Okhla Industrial Estate,
                    New Delhi.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-cyan-400 mt-1"
                />
                <div>
                  <p className="text-gray-300 leading-7">
                    <span className="font-semibold text-white">
                      Branch Office:
                    </span>{" "}
                    Office 203, EFC Prime,
                    Sharyu Complex,
                    Baner, Pune - 411045
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={20}
                  className="text-cyan-400"
                />
                <a
                  href="tel:+917249736102"
                  className="text-gray-300 hover:text-cyan-400"
                >
                  +91 7249736102
                </a>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="text-cyan-400"
                />
                <a
                  href="mailto:info@srujaninfotech.in"
                  className="text-red-400 hover:text-red-300"
                >
                  info@srujaninfotech.in
                </a>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="text-cyan-400"
                />
                <a
                  href="mailto:career@srujaninfotech.in"
                  className="text-red-400 hover:text-red-300"
                >
                  career@srujaninfotech.in
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2026 Srujan Infotech. All Rights Reserved.
          </p>

          <NavLink
            to="/privacy-policy"
            className="text-red-400 hover:text-red-300"
          >
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;