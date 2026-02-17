import Button from "./Button";
import hero from "../assets/hero.svg";
import { motion } from "motion/react";

const Hero = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const swipeleft = {
    right: {
      x: 40,
      opacity: 0,
    },
    left: {
      x: -40,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-1 lg:grid-cols-2 gap-5"
    >
      <motion.div
        variants={swipeleft}
        key="div"
        initial="left"
        whileInView="show"
        exit="left"
        className=" flex flex-col gap-5  justify-between h-full overflow-hidden"
      >
        <h1 className="sm:text-[48px]! md:text-[52px]! lg:text-[60px]!">
          Navigating the digital landscape for success
        </h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button block>Book a consultation</Button>
      </motion.div>
      <motion.div
        variants={swipeleft}
        key="div"
        initial="right"
        whileInView="show"
        exit="right"
        className=" flex overflow-hidden"
      >
        <img src={hero} alt="hero-section" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
