"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
    id="contact"
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Contact me
        </h4>
        <a href="mailto:order@example.com">
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img
              src="/email.png"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              NEDIM.KORJENIC25@GMAIL.COM
            </span>
          </button>
        </a>
      </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* <h4 className="font-extrabold text-[24px] text-white">NEDIM K.</h4> */}
            <img src="logokora.png" className="w-[60px] h-[60px] object-contain"/>
            <p className="font-normal text-[14px] text-white opacity-50">Copyright©2022. All rights reserved.</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
                <img  src={social.url} alt={social.name} className="w-[24px] h-[24px] object-contain cursor-pointer"/>
                </a>
              ))}
            </div>
          </div>
        </div>
    </div>
  </motion.footer>
);

export default Footer;
