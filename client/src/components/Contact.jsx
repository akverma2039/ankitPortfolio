import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("text-gray-700");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");
    setStatusColor("text-gray-700");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setStatusColor("text-green-500");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
        setStatusColor("text-red-500");
      }
    } catch {
      setStatus("Failed to send message. Please check your connection.");
      setStatusColor("text-red-500");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-600 text-center max-w-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Have a project in mind? Let&apos;s build something great together. Fill out the form below, and I&apos;ll get back to you soon.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            rows="4"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className={`w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <p className={`text-center text-sm mt-4 ${statusColor}`}>{status}</p>
        )}
      </motion.form>
    </div>
  );
}
