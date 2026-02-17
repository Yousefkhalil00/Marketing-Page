import { motion } from "motion/react";

const Button = ({ block, hidden, className, children }) => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className={`${
        block
          ? `bg-slate-900 text-white py-3 px-6 rounded-xl hover:text-green transition-all `
          : "border-slate-900 border-1 py-3 px-6 rounded-xl bg-white text-black hover:text-gray-600 hover:border-gray-600"
      } cursor-pointer  ${hidden && "hidden"} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
