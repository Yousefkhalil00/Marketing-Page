import parnter1 from "../assets/Partners/1.svg";
import parnter2 from "../assets/Partners/2.svg";
import parnter3 from "../assets/Partners/3.svg";
import parnter4 from "../assets/Partners/4.svg";
import parnter5 from "../assets/Partners/5.svg";
import parnter6 from "../assets/Partners/6.svg";
import { motion } from "motion/react";

const images = [parnter1, parnter2, parnter3, parnter4, parnter5, parnter6];

const Partners = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-3 gap-5 lg:flex lg:items-center lg:justify-between my-20"
    >
      {images.map((image) => (
        <motion.img
          key={image}
          variants={item}
          className="mx-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
          src={image}
          alt="partner logo"
        />
      ))}
    </motion.div>
  );
};

export default Partners;
