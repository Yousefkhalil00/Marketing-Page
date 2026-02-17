import { motion } from "motion/react";

const content = [
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    Review:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: "Smith John",
    position: "Marketing Director at XYZ Corp",
    Review:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    Review:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: "Smith John",
    position: "Marketing Director at XYZ Corp",
    Review:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
    Review:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: "Smith John",
    position: "Marketing Director at XYZ Corp",
    Review:
      '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    y: 30,
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

const Testimonials = () => {
  return (
    <div id="Blog" className="my-20">
      {/* Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="md:flex gap-10 mb-20 items-center"
      >
        <motion.h2
          variants={item}
          className="inline bg-green px-2 rounded-xl font-medium"
        >
          Testimonials
        </motion.h2>

        <motion.p variants={item}>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid lg:grid-cols-3 grid-cols-1 gap-5 bg-stone-900 text-white p-8 rounded-4xl"
      >
        {content.map((itemData, index) => (
          <motion.div key={index} variants={item} className="py-5">
            <div className="border border-green p-6 rounded-4xl hover:shadow-lg transition duration-300">
              <p className="leading-relaxed text-sm">
                {itemData.Review.replace(/"/g, "")}
              </p>
            </div>

            <h4 className="text-green text-center mt-5 font-semibold">
              {itemData.name}
            </h4>

            <h5 className="text-center text-sm text-gray-300">
              {itemData.position}
            </h5>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
