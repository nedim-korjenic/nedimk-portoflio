"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-center w-[250px] h-[250px] rounded-[50px] glassmorphism">
        <img
          src={imgUrl}
          alt="planet-01"
          className="md:w-[85%] w-full h-[85%] rounded-[32px] object-cover"
        />
      </div>
    </a>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[100%] h-[100%] object-contain"
          />
        </a>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
