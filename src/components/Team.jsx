import flower from "../assets/flower.svg";
import { motion } from "motion/react";

const content = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
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

const Team = () => {
  return (
    <div className="my-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 my-20 items-center"
      >
        <motion.h2
          variants={item}
          className="bg-green px-2 rounded-xl font-medium"
        >
          Team
        </motion.h2>

        <motion.p variants={item}>
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {content.map((member) => (
          <motion.div
            key={member.name}
            variants={item}
            className="flex flex-col p-5 border shadow-xl rounded-4xl bg-white hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-5">
              <img src={flower} alt="flower" />
              <div>
                <h4 className="font-semibold">{member.name}</h4>
                <h5 className="text-sm text-gray-500">{member.position}</h5>
              </div>
            </div>

            <div className="py-5">
              <hr className="w-full mb-5" />
              <p className="text-sm leading-relaxed">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
