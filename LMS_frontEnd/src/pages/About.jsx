import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import history from "../assets/History.jpg";
import missionVisionBg from "../assets/Event3.jpg"; // Add a new image for the first section
import leadershipBg from "../assets/Event1.jpg"; // Add a new image for the third section
import Logo from "../assets/SchoolLogos/School_logo.png";
import PrincipalCards from "../components/PrincipalCard";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { MdSchool, MdGroups, MdLibraryBooks } from "react-icons/md";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const langKey = useSelector((store) => store.config.lang);
  const translations = lang[langKey] || lang["en"];

  const stats = [
    { icon: <MdGroups />, value: "600+", label: translations.students },
    { icon: <MdSchool />, value: "55+", label: translations.teachers },
    { icon: <MdLibraryBooks />, value: "12", label: translations.classes },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden font-inter">
      {/* First Section: Logo, Vision, and Mission */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${missionVisionBg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></motion.div>

        {/* Gradient Overlay with Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col items-center text-center px-6 sm:px-10">
          {/* School Logo and Title */}
          <motion.div
            className="flex flex-col items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={Logo} alt="School Logo" className="w-48 h-48 object-contain mb-4" />
            <motion.h1
              className="text-5xl font-bold mt-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {translations.aboutTitle}
            </motion.h1>
          </motion.div>

          {/* Mission and Vision Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 w-full"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Mission */}
            <motion.div
              className="p-8 bg-white/10 backdrop-blur-lg rounded-xl"
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">
                {translations.missionTitle}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed text-left">
                {translations.missionText}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="p-8 bg-white/10 backdrop-blur-lg rounded-xl"
              variants={{
                hidden: { x: 50, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
            >
              <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">
                {translations.visionTitle}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed text-left">
                {translations.visionText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Second Section: History */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${history})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></motion.div>

        {/* Gradient Overlay with Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col items-center text-center px-6 sm:px-10">
          {/* History Title */}
          <motion.h2
            className="text-5xl font-bold text-yellow-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {translations.historyTitle}
          </motion.h2>

          {/* History Description */}
          <motion.div
            className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-200 text-lg leading-relaxed text-left">
              {translations.historyText}
            </p>
            <div className="mt-8 p-4 bg-yellow-400/10 rounded-lg border-l-4 border-yellow-400">
              <p className="text-gray-200 italic text-right">
                {translations.historyQuote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third Section: Leadership */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${leadershipBg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></motion.div>

        {/* Gradient Overlay with Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col items-center text-center px-6 sm:px-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {translations.leadershipTitle}
          </motion.h2>
          <PrincipalCards />
        </div>
      </section>
    </div>
  );
};

export default About;