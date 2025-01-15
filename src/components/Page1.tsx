import React, { useEffect } from "react";
import "./Component.scss";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { SectionProps } from "@/types";

const Page1: React.FC<SectionProps> = ({ currentSection }) => {
  const controls = useAnimationControls();
  useEffect(() => {
    if (currentSection === 0) {
      controls.set("hidden");
      setTimeout(() => {
        controls.start("visible");
      }, 500);
    }
  }, [currentSection, controls]);

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const textGroupVariants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="section1" className="page page1 section">
      <span className="banner">
        <Image
          fill
          objectFit="cover"
          className="banner-image"
          src="/images/banner.png"
          alt="Banner image"
        />
      </span>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        className="tittle"
      >
        MAX I & US
      </motion.h1>
      <div className="contents">
        <motion.span
          initial="hidden"
          animate={controls}
          variants={textGroupVariants}
          className="content-layout"
        >
          <span className="desc">Maxius is the only self-developed </span>
          <span className="desc">semiconductor company that </span>
          <span className="desc">focuses on developing High-Performance </span>
          <span className="desc">Servers. We provide specialized </span>
          <span className="desc">solutions tailored towards different </span>
          <span className="desc">sectors of the IT industry and strive </span>
          <span className="desc">to break into the global market as a </span>
          <span className="desc">leader in server technology.</span>
        </motion.span>
        <motion.span
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-bottom"
        >
          Together, we will be the best in value and speed.
        </motion.span>
      </div>
    </section>
  );
};

export default Page1;
