import logo from "../assets/Whitelogo.svg";
import { motion } from "motion/react";

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
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Footer = () => {
  const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      whileInView="show"
      className="bg-stone-900 text-white px-10 py-20 rounded-tl-4xl rounded-tr-4xl mt-32"
    >
      <motion.div
        variants={item}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12"
      >
        <img src={logo} alt="logo" className="h-8" />

        <div className="flex flex-wrap gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={link}
              className="hover:text-green transition duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div variants={item} className="flex flex-col gap-5">
        <h4 className="bg-green text-black font-medium inline px-3 py-1 rounded-lg w-fit">
          Contact us:
        </h4>

        <div className="space-y-2 text-sm text-gray-300">
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St</p>
          <p>Moonstone City, Stardust State 12345</p>
        </div>

        <hr className="w-full border-gray-700 my-6" />

        <p className="text-sm text-gray-400">
          ©2025 Positivus. All Rights Reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
