import { Link } from "react-router";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Wrench,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">AutoPro</span>
                <span className="text-red-600 text-xs font-medium tracking-wider">
                  SERVICES
                </span>
              </div>
            </div>
            <p className="text-zinc-400 mb-4">
              Your trusted partner for professional automotive care and
              maintenance services.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-zinc-800 p-2.5 rounded-lg text-zinc-400 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-zinc-800 p-2.5 rounded-lg text-zinc-400 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-zinc-800 p-2.5 rounded-lg text-zinc-400 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-zinc-400 hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-zinc-400 hover:text-red-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-zinc-400 hover:text-red-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-400 hover:text-red-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-zinc-400">Car Maintenance</span>
              </li>
              <li>
                <span className="text-zinc-400">Diagnostics</span>
              </li>
              <li>
                <span className="text-zinc-400">Auto Repair</span>
              </li>
              <li>
                <span className="text-zinc-400">Detailing</span>
              </li>
              <li>
                <span className="text-zinc-400">Tire Service</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <span>123 Auto Street, Car City, CC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span>info@autopro.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {currentYear} AutoPro Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-zinc-400 hover:text-red-600 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-red-600 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
