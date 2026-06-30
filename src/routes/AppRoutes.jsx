import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "../pages/Home";
import Collections from "../pages/Collections";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Turf from "../pages/Turf";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "Home | Kevin Sports",
      "/collections": "Collections | Kevin Sports",
      "/products": "Products | Kevin Sports",
      "/about": "About | Kevin Sports",
      "/contact": "Contact | Kevin Sports",
      "/turf": "Turf Booking | Kevin Sports"
    };
    
    // Set exact page title
    document.title = routeTitles[location.pathname] || "Kevin Sports";
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/turf" element={<Turf />} />
      
      {/* Catch-all for unmatched routes linking to products */}
      <Route path="*" element={<Products />} />
    </Routes>
  );
}