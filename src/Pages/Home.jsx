import React from "react";
import { motion } from "framer-motion";
import eventImage from "../assets/event.jpg";
import image1 from "../assets/dominos.png";
import image2 from "../assets/red.png";

const Home = () => {
  const sponsors = [image1, image2];

  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-200 to-purple-400 min-h-screen pt-24 pb-10">
      {/* Main Container */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src={eventImage}
              alt="Event"
              className="w-full md:w-3/4 rounded-xl shadow-xl"
            />
          </motion.div>

          {/* Right Section - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 text-lg text-gray-800 space-y-4 md:pl-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white drop-shadow-lg">
              Welcome to <span className="text-yellow-300">WaveCraze 2024!</span>
            </h2>
            <p className="text-lg text-gray-100">
              🎉 Get ready for an electrifying cultural fest at <b>NIT Durgapur</b>!  
              Join us for music, art, and unforgettable experiences!  
            </p>
            <p className="text-lg text-gray-100">
              Whether you're an artist, dancer, musician, or tech geek—this is **your** moment to shine!  
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-500 transition-all"
            >
              Join the Celebration 🎶
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="mt-16 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white"
        >
          Our Sponsors
        </motion.h3>
        <div className="flex flex-wrap justify-center mt-6">
          {sponsors.map((sponsor, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: id * 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="m-4"
            >
              <img
                src={sponsor}
                className="w-24 md:w-32 h-24 md:h-32 rounded-lg shadow-lg cursor-pointer"
                alt="Sponsor"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
