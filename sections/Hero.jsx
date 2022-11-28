"use client";
import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 ol-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(0.5)} className={styles.heroHeading}>
          Engineer
        </motion.h1>
        <motion.div
          variants={textVariant(0.6)}
          className="flex flex-row justify-center items-center"
        >
          <div className={styles.heroDText} />
          <h1 className={`${styles.heroHeading}`}>eveloper</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0, 0.5)}
        className="relative w-full md:-mt-[20px] -nt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/banner1.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <div className="w-full flex flex-col items-end -mt-[250px] pr-[40px] relative z-10 gap-4">
              {socials.map((social) => (
                <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
                <img  src={social.url} alt={social.name} className="w-[34px] h-[34px]  object-contain cursor-pointer"/>
                </a>
              ))}
            </div>
        {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/new-stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[10ppx] object-contain"
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
