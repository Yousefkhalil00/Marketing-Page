import { useState } from "react";
import { motion } from "motion/react";
import { CiCircleMore } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";

const content = [
  {
    id: 1,
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research ",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const WorkingProcess = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const items = {
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
  const [activeId, setActiveId] = useState(null);

  function handleIsActive(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }
  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 my-20 items-center"
      >
        <motion.h2
          variants={items}
          className="bg-green px-2 rounded-xl font-medium inline"
        >
          Our Working Process
        </motion.h2>
        <motion.p variants={items} initial="hidden" whileInView="show">
          Step-by-Step Guide to Achieving Your Business Goals
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col gap-5"
      >
        {content.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              variants={items}
              className={`${isActive ? "bg-green" : "bg-grey"} border shadow-xl flex flex-col gap-10 p-5 rounded-3xl `}
            >
              <div className="flex justify-between items-center">
                <h3 className="flex text-[24px]! lg:text-[30px]!  items-center gap-5">
                  <span className="font-medium ">0{item.id}</span>
                  {item.title}
                </h3>
                <button
                  onClick={() => handleIsActive(item.id)}
                  className=" w-7 h-7 md:w-14 md:h-14 flex items-center justify-center border border-black rounded-full bg-white text-2xl font-medium transition-all duration-300 cursor-pointer"
                >
                  {isActive ? <IoIosCloseCircle /> : <CiCircleMore />}
                </button>
              </div>

              {isActive && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.description}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default WorkingProcess;
