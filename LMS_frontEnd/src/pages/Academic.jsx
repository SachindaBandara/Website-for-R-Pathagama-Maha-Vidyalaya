import { useEffect } from 'react';
import { motion } from 'framer-motion';
import facultyImg from '../assets/ImageCarousel/Bg-1.jpg';
import admissionsImg from '../assets/ImageCarousel/Bg-2.jpg';
import curriculumImg from '../assets/ImageCarousel/Bg-3.jpg';

const sections = [
  {
    id: 'faculty',
    title: 'Our Faculty',
    description: "The teaching staff at St. Joseph’s College, Colombo 10, epitomize the institution’s commitment to academic excellence and holistic development...",
    image: facultyImg,
  },
  {
    id: 'admissions',
    title: 'Admissions',
    description: "Admittance entails a rigorous procedure reflecting our academic standards...",
    image: admissionsImg,
  },
  {
    id: 'curriculum',
    title: 'Curriculum',
    description: "Our curriculum blends tradition and modernity, fostering intellectual development...",
    image: curriculumImg,
  },
];

const Academic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-inter">
      {sections.map((section, index) => (
        <section
          key={section.id}
          className="relative min-h-screen flex flex-col justify-center text-white"
          style={{
            backgroundImage: `url(${section.image})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

          {/* First Part: Title Section */}
          <motion.div
            className="relative container mx-auto text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center justify-center space-x-4 mb-6">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">
                {section.title}
              </h2>
            </div>

            {/* Divider Line */}
            <motion.div
              className="w-16 h-1 bg-yellow-500 mb-8 mx-auto"
              initial={{ scaleX: 0.2 }} // Start from a small but visible width
              whileInView={{ scaleX: 1 }} // Scale to full width
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.div>


          {/* Second Part: Description Section */}
          <motion.div
            className="relative container mx-auto text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed text-white/90 drop-shadow-lg">
              {section.description}
            </p>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default Academic;