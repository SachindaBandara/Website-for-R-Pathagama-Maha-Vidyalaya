import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import history from "../assets/History.jpg";
import Logo from "../assets/SchoolLogos/School_logo.png";
import sin_text from "../assets/SchoolLogos/sinhala_Text.png";
import PrincipalCards from "../components/PrincipalCard";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const About = () => {
    const langKey = useSelector((store) => store.config.lang);
    const translations = lang[langKey] || lang["en"];

    const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [historyRef, historyInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <ParallaxProvider>
            <div className="font-inter my-16">
                <section className="container mx-auto px-4 py-16">
                    <div className="mb-14 flex flex-col items-center">
                        <Parallax y={[-20, 20]}>
                            <img src={Logo} alt="School Logo" className="w-48 h-48 object-contain mb-4" />
                        </Parallax>
                        <Parallax y={[-10, 10]}>
                            <img src={sin_text} alt="Sinhala Text" className="w-48 object-contain opacity-90" />
                        </Parallax>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        <motion.div
                            ref={infoRef}
                            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={infoInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-red-custom text-center">
                                {translations.missionTitle}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-center">
                                {translations.missionText}
                            </p>
                        </motion.div>

                        <motion.div
                            ref={aboutRef}
                            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-red-custom text-center">
                                {translations.visionTitle}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-center">
                                {translations.visionText}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        ref={historyRef}
                        className="bg-white rounded-lg overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={historyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid lg:grid-cols-2 gap-8">
                            <Parallax y={[-20, 20]}>
                                <div className="relative h-96">
                                    <img
                                        src={history}
                                        alt="School History"
                                        className="w-full h-full rounded-lg object-cover transform transition duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-4xl font-bold mb-2">{translations.historySubtitle}</h3>
                                        <p className="text-lg opacity-90">{translations.historyTitle}</p>
                                    </div>
                                </div>
                            </Parallax>

                            <div className="p-8">
                                <h2 className="text-3xl font-bold mb-6 text-red-custom">{translations.historyTitle}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {translations.historyText}
                                </p>
                                <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-800">
                                    <p className="text-gray-700 italic">{translations.historyQuote}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section className="container mx-auto px-4 py-16">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-red-custom"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {translations.leadershipTitle}
                    </motion.h2>
                    <PrincipalCards />
                </section>
            </div>
        </ParallaxProvider>
    );
};

export default About;
