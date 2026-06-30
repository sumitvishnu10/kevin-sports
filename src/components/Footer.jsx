import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-wine-dark text-white pt-20 pb-8 border-t border-wine-red">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Social */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-4xl text-white font-['Great_Vibes'] mb-6 inline-block">
              Kevin Sports
            </Link>
            <p className="text-white/70 text-sm mb-8 max-w-sm leading-relaxed">
              Your ultimate destination for premium sports equipment and athlete essentials. Elevate your game with our handpicked collections.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-wine-red transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-wine-red transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-wine-red transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-wine-red transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-6">Shop</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li><Link to="/collections" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/best-sellers" className="hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-6">Customer Care</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 opacity-70" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 opacity-70" />
                <span>support@kevinsports.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 opacity-70" />
                <span>Chennai, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Kevin Sports. All rights reserved.</p>
          <p>Designed with ❤️ for athletes.</p>
        </div>
      </div>
    </footer>
  );
}
