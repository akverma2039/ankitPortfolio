import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ankitProfile from "../images/ankit2.jpg"; // Adjust the path as per your file structure

export default function HeroSection() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 lg:px-20 py-10 sm:py-16 min-h-screen bg-gradient-to-r from-white via-gray-100 to-white overflow-hidden relative pb-24">
      {/* Decorative Background Circles */}
      <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-yellow-100 rounded-full -top-10 -left-10 blur-3xl opacity-50"></div>
      <div className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-100 rounded-full -bottom-10 -right-10 blur-3xl opacity-50"></div>

      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 leading-tight"
        >
          I’m <span className="text-black">Ankit Kumar Verma</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mt-3"
        >
          Full-Stack Developer
        </motion.h2>
        <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
          Aspiring Full Stack Developer skilled in the MERN stack, with foundational knowledge of CI/CD processes, Docker, and CRUD operations. Experienced in building dynamic, efficient applications focusing on performance and scalability.
        </p>
        <motion.button
          onClick={() => navigate("/contact")} // Navigate to Contact Page
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-white px-6 sm:px-8 py-2 sm:py-3 mt-5 sm:mt-6 flex items-center justify-center rounded-full text-base sm:text-lg shadow-lg hover:bg-yellow-600 transition duration-300 mx-auto md:mx-0"
        >
          Contact Me <FaArrowRight className="ml-3" />
        </motion.button>
      </div>

      {/* Right Side: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center mt-8 sm:mt-10 md:mt-0 relative z-10"
      >
        <div className="relative group mb-10 sm:mb-0">
          <img
            src={ankitProfile}
            alt="Profile"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl object-cover border-4 border-white group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
