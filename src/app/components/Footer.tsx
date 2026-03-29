import { Link } from "react-router";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Wrench,
} from "lucide-react";
import { metadata } from "../../data/metadata";

export function Footer() {
  const { site, footer } = metadata;

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
                <span className="text-white font-bold text-lg">
                  {footer.company.name}
                </span>
                <span className="text-red-600 text-xs font-medium tracking-wider">
                  {footer.company.tagline}
                </span>
              </div>
            </div>
            <p className="text-zinc-400 mb-4">{footer.company.description}</p>
            <div className="flex gap-3">
              <a
                href={footer.social.facebook}
                className="bg-zinc-800 p-2.5 rounded-lg text-zinc-400 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={footer.social.instagram}
                className="bg-zinc-800 p-2.5 rounded-lg text-zinc-400 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={footer.social.twitter}
                className="bg-zinc-800 p-2.5 rounded-lg text-zinc-400 hover:bg-red-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {footer.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-zinc-400 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {footer.services.title}
            </h3>
            <ul className="space-y-2">
              {footer.services.items.map((service, index) => (
                <li key={index}>
                  <span className="text-zinc-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {footer.contact.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                <span>{footer.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span>{footer.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span>{footer.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {site.year} {footer.legal.copyright}
            </p>
            <div className="flex gap-6">
              {footer.legal.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-zinc-400 hover:text-red-600 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
