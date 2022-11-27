"use client";

import { motion } from "framer-motion";
import { TypingText, NewFeatures, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import {  skills } from "../constants";
import SkillsComponent from "../components/SkillsComponent";
 
const Skills = () => (
  <section className={`${styles.paddings} relative z-10` } id="skills">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-0.75 flex justify-center flex-col"
      >
        <TypingText title="| Skills are freedom." />
        <TitleText title={<>Skills</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {skills.map((feature) => (
            <SkillsComponent key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter}`}
      >
        <img
          src="/skills-planet.png"
          alt="education"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
