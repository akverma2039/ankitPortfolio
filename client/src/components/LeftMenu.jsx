import { useState, useEffect, useRef } from "react";
import { FaDownload, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaDribbble, FaCheckSquare, FaNodeJs, FaReact, FaDatabase, FaCss3Alt, FaJsSquare, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import ankitProfile from "../images/ankit.jpeg"; // Adjust the path as per your file structure


const skills = [
  { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> },
  { name: "Express", icon: <FaServer className="text-gray-600" /> },
  { name: "React.Js", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Javascript", icon: <FaJsSquare className="text-yellow-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
];

const extraSkills = [
  "CRUD Operations, Restful API",
  "Authentication & Authorization",
  "CI/CD, Docker, Kubernetes",
  "GIT & GitHub Knowledge"
];

const LeftMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !profileRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Profile Picture as Menu Toggle */}
      {isMobile && (
        <motion.img
          ref={profileRef}
          src={ankitProfile}
          alt="Profile"
          className="fixed top-4 left-4 w-12 h-12 rounded-full border-2 border-yellow-500 shadow-lg cursor-pointer z-50"
          onClick={() => setMenuOpen(prev => !prev)} // Toggle Sidebar
          whileHover={{ scale: 1.1 }}
        />
      )}

      {/* Sidebar / Drawer */}
      <motion.div
        ref={menuRef}
        initial={{ x: isMobile ? -300 : 0, opacity: 0 }}
        animate={{ x: menuOpen || !isMobile ? 0 : -300, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 top-0 h-full w-72 bg-white shadow-lg p-6 flex flex-col items-center overflow-y-auto hide-scrollbar transition-transform ${isMobile ? "z-40" : ""}`}
      >
        {/* Profile Image (Same as Menu Toggle) */}
        <motion.img
          src={ankitProfile}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 border-2 border-yellow-500 shadow-lg"
          whileHover={{ scale: 1.1 }}
        />
        <h2 className="text-lg font-semibold">Ankit Kumar Verma</h2>
        <p className="text-gray-500 mb-4 text-center">Full Stack Developer (MERN)</p>

        {/* Social Icons */}
        <div className="flex space-x-3 mb-4">
          {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaDribbble].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="text-yellow-500 text-lg cursor-pointer"
            >
              <Icon />
            </motion.div>
          ))}
        </div>

        {/* User Details */}
        <div className="w-full text-sm space-y-2 mb-4">
          <div className="flex justify-between"><span className="font-semibold">Age:</span> <span>21</span></div>
          <div className="flex justify-between"><span className="font-semibold">E-mail:</span> <span>akverma2039@gmail.com</span></div>
          <div className="flex justify-between"><span className="font-semibold">Phone:</span> <span>+91 9625262039</span></div>
          <div className="flex justify-between"><span className="font-semibold">Freelance:</span> <span className="text-green-500">Available</span></div>
          <div className="flex justify-between"><span className="font-semibold">Address:</span> <span>Nangloi, New Delhi 110041</span></div>
        </div>

        {/* Skills Section */}
        <div className="p-4 w-full bg-white shadow-lg rounded-lg">
          <h3 className="font-semibold text-lg mb-2 text-center">Skills</h3>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center p-1.5 rounded-lg bg-gray-200 hover:bg-yellow-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mr-2">{skill.icon}</div>
                <p className="text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Extra Skills */}
          <h3 className="font-semibold text-lg mt-4 text-center">Extra Skills</h3>
          <ul className="space-y-1">
            {extraSkills.map((extraSkill, index) => (
              <li key={index} className="flex items-center text-sm">
                <FaCheckSquare className="text-yellow-500 mr-2" /> {extraSkill}
              </li>
            ))}
          </ul>
        </div>

        {/* Download CV Button */}
        <motion.a
          href="/Ankit Kumar Verma_CV.pdf"
          download="Ankit_Kumar_Verma_CV.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-500 text-white px-6 py-2 rounded flex items-center mt-4 shadow-lg hover:bg-yellow-600 transition duration-300"
>
          <FaDownload className="mr-2" /> DOWNLOAD CV
        </motion.a>
      </motion.div>
    </>
  );
};

export default LeftMenu;
