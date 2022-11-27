"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01"/>
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}>
      {/* <img src="/search.svg" alt="Search" className="w-[24px] h-[24px] object-contain"/> */}
      <div className="flex flex-col justify-center items-center">
      <img src="/logokora.png" alt="logo" className="w-[80px] h-[80px] object-contain ml-2"/>
      <h2 className="font-semibold text-[15px] leading-[30px] text-white"> NEDIM KORJENIC</h2>
      </div>
      {/* <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain"/> */}
    </div>
  </motion.nav>
);

export default Navbar;
