import { motion } from "motion/react";
import Arrow from "../assets/Ellipse.svg";

const studies = [
  "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
];

const CaseStudies = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
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
  return (
    <div className="">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 my-20 items-center"
      >
        <motion.h2
          variants={items}
          initial="hidden"
          whileInView="show"
          className="bg-green  px-2 rounded-xl font-medium inline"
        >
          Case Studies
        </motion.h2>
        <motion.p variants={items} initial="hidden" whileInView="show">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="bg-stone-900 text-white grid lg:grid-cols-3 grid-cols-1 sm:p-5 md:p-20 rounded-3xl my-20 gap-10"
      >
        {studies.map((item) => {
          return (
            <motion.div
              key={item}
              variants={items}
              initial="hidden"
              whileInView="show"
              className="flex flex-col gap-10"
            >
              <h4>{item}</h4>
              <div className="flex gap-5">
                <p className="text-green">Learn More</p>
                <img src={Arrow} alt="Learn More" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CaseStudies;
