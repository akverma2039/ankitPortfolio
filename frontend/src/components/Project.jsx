import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ChatMola - A real-time chatting App",
    description:
      "A WhatsApp-like messaging platform with authentication, and real-time chat features built using the MERN stack and Socket.io, deployed on Render.",
    techStack: ["React.js", "Redux Toolkit", "MongoDB", "Socket.io", "Tailwind CSS", "Node.js"],
    link: "https://chatmola.onrender.com/", // Add your project live link here
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 pt-32 px-4 sm:px-6 md:px-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 min-h-screen overflow-hidden scroll-smooth pb-28 flex flex-col justify-center items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-400 mb-8"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 w-full justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full max-w-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-yellow-500 text-white px-6 py-3 rounded-full text-base hover:bg-yellow-600 transition duration-300 shadow-lg"
            >
              View Project <FaExternalLinkAlt className="ml-3" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
