import { motion } from "motion/react";
import Arrow from "../assets/Ellipse.svg";

const titles = [
  "Search engine optimiaztion",
  "Pay-per-click advertising",
  "Social Media Marketing",
  "Email Marketing",
  "Content Creation",
  "Analytics And Tracking",
];

const Services = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
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
        duration: 1,
      },
    },
  };
  const swipe = {
    hidden: {
      x: 40,
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
    <div id="Services">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 my-20 items-center"
      >
        <motion.h2
          variants={swipe}
          initial="hidden"
          whileInView="show"
          className="bg-green px-2 rounded-xl font-medium inline"
        >
          Services
        </motion.h2>
        <motion.p variants={swipe} initial="hidden" whileInView="show">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {titles.map((title) => {
          return (
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              key={title}
              className="even:bg-green  odd:bg-grey rounded-4xl border border-1 shadow-xl shadow-black h-[310px] p-12 flex flex-col justify-between md:even:[&>h3]:bg-grey md:odd:[&>h3]:bg-green "
            >
              <h3 className="font-bold sm:text-[24px]! md:text-[30px]! md:w-[50%]">
                {title}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src={Arrow}
                  className="bg-black rounded-full p-2"
                  alt="Learn more"
                />

                <p>Learn more</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
