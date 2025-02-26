import { useState, useEffect } from "react";
import { Home, Code, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


const menuItems = [
  { icon: <Home size={24} />, label: "Home", link: "/" },
  { icon: <Code size={24} />, label: "Projects", link: "/project" },
  { icon: <MessageCircle size={24} />, label: "Contact", link: "/contact" }
];

export default function RightMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile ? (
        <div className="fixed right-0 top-0 h-screen bg-white w-16 flex flex-col items-center py-6 shadow-lg">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-center w-12 h-12 my-2 rounded-full transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip */}
              <motion.div
                className={`absolute left-[-100px] bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 transition-opacity ${
                  hoveredIndex === index ? "opacity-100" : ""
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? -5 : -10 }}
              >
                {item.label}
              </motion.div>
              {/* Clickable Icon */}
              <NavLink
                to={item.link} // ✅ Changed href to to
                className={`p-3 rounded-full ${hoveredIndex === index ? "bg-yellow-400" : "bg-gray-300"}`}
              >
                {item.icon}
              </NavLink>
            </motion.div>
          ))}
        </div>
      ) : (
        // Mobile Bottom Navbar
        <div className="fixed bottom-0 left-0 w-full bg-white flex justify-around items-center py-3 shadow-lg">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link} // ✅ Changed href to to
              className="flex flex-col items-center text-gray-600 active:text-yellow-500 focus:outline-none"
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setHoveredIndex(null)}
            >
              <div className={`p-3 rounded-full ${hoveredIndex === index ? "bg-yellow-400" : "bg-gray-300"}`}>
                {item.icon}
              </div>
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
