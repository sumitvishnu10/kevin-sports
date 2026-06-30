import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream/90 backdrop-blur-md border-b border-wine-red/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="text-4xl text-wine-red font-['Great_Vibes']"
        >
          Kevin Sports
        </Link>

        <div className="flex gap-10 text-sm font-medium text-text">
          {['/', '/collections', '/products', '/about', '/contact'].map((path) => (
            <Link
              key={path}
              to={path}
              className={`hover:text-wine-red transition-colors relative ${
                isActive(path) ? 'text-wine-red after:content-[""] after:absolute after:bottom-[-26px] after:left-0 after:w-full after:h-0.5 after:bg-wine-red' : ''
              }`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 text-text">
          <button className="hover:text-wine-red transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-wine-red transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-wine-red transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-wine-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}