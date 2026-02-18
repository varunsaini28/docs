import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../assets/image.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center">

      {/* ================= BACKGROUND ================= */}

      {/* Animated Gradient */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "50% 100%",
            "0% 50%",
          ],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 
        bg-[linear-gradient(-45deg,#0f0c29,#1a1a2e,#16213e,#0f3460,#533483)]
        bg-[length:500%_500%]"
      />

      {/* Glow Blob 1 */}
      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] 
        bg-purple-600 rounded-full blur-3xl opacity-30 
        top-10 left-10"
      />

      {/* Glow Blob 2 */}
      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] 
        bg-blue-600 rounded-full blur-3xl opacity-30 
        bottom-10 right-10"
      />

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Logo */}
        <motion.img
          src={logo}
          alt="logo"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{
            duration: 1.2,
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1 }}
          className="w-40 h-40 md:w-52 md:h-52 
          rounded-full object-cover 
          shadow-[0_0_40px_rgba(168,85,247,0.6)]"
        />

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="mt-8 text-5xl md:text-7xl font-extrabold 
          bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 
          bg-clip-text text-transparent 
          drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]"
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Binary Brains
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Official Documentation Portal  
          <br />
          Crafted with Innovation & Intelligence 
        </motion.p>

        {/* Button */}
        <motion.button
  onClick={() => navigate("/docs")}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.6, delay: 0.6 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="mt-10 px-8 py-3 rounded-full 
  bg-gradient-to-r from-purple-500 to-blue-500 
  font-semibold shadow-lg 
  hover:shadow-purple-500/50 transition-all duration-300  cursor-pointer"
>
  Explore Docs
</motion.button>


      </div>

    </div>
  );
};

export default Home;
