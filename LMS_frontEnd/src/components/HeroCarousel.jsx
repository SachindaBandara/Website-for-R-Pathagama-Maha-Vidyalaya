import "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import Image1 from "../assets/ImageCarousel/Bg-4.jpg";
import Image2 from "../assets/ImageCarousel/Bg-7.jpg";
import Image5 from "../assets/ImageCarousel/Bg-1.jpg";
import Image9 from "../assets/ImageCarousel/Bg-5.jpg";
import Image8 from "../assets/ImageCarousel/Bg-6.jpg";
import Image7 from "../assets/ImageCarousel/Bg-3.jpg";
import Logo from "../assets/SchoolLogos/School_logo.png";

const HeroImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };
  
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  // Destructure language constants with a fallback to English
  const { header, tagline, scrollDown } = lang[langKey] || lang["en"];

  const images = [Image5, Image9, Image7, Image1, Image8, Image2];

  return (
    <div className="relative bg-gray-50 mt-16">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
              <div
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Combined header, tagline, and scroll-down indicator */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <img
          src={Logo}
          alt="Logo"
          className="h-20 sm:h-28 md:h-36 lg:h-40 mb-4"
        />
        <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center">
          {header}
        </h1>
        <p className="text-white mt-3 font-thin max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-8">
          {tagline}
        </p>
        {/* Scroll-down indicator positioned below the tagline */}
        <motion.div
          className="mt-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-white text-sm sm:mt-12 mb-2">{scrollDown}</span>
          <div className="w-4 h-8 border-2 border-white rounded-full">
            <motion.div
              className="w-2 h-2 bg-white rounded-full mt-1"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroImageCarousel;
