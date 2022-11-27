"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings}  relative z-10 mt-[100px]`} >
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center text-[20px]" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        I am a young, motivated
        <span className="font-extrabold text-white"> Engineer </span>
        working as a
        <span className="font-extrabold text-white"> Frontend developer</span>.
        Combining engineering with Web development skills gives me the edge in
        <span className="font-extrabold text-white"> problem solving</span>. My
        main drive is that I am always ready to
        <span className="font-extrabold text-white"> learn/teach</span>, and I
        am
        <span className="font-extrabold text-white"> easy to work with</span>.
        Challenges excite me, so what
        <span className="font-extrabold text-white"> challenges </span>
        do you have for me?
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
