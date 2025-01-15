import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./Component.scss";
import { SectionProps } from "@/types";

const Page5: React.FC<SectionProps> = ({ currentSection }) => {
  const controls = useAnimationControls();
  useEffect(() => {
    if (currentSection === 4) {
      controls.set("hidden");
      setTimeout(() => {
        controls.start("visible");
      }, 500);
    }
  }, [currentSection, controls]);

  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariant = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    },
  };

  const contentVariant = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section id="section5" className="page page5 section">
      <div className="page5-container">
        <div className="page5-wrapper">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={parentVariants}
            className="block-item"
          >
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={titleVariant}
              className="page5-name"
            >
              Company.
            </motion.h3>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={contentVariant}
              className="email"
            >
              <a href="mailto:support@maxius.io">
                <p className="page5-contact">support@maxius.io</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={contentVariant}
            className="block-item"
          >
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={titleVariant}
              className="page5-name"
            >
              Warranty.
            </motion.h3>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={contentVariant}
              className="email"
            >
              <a href="#">
                <p className="page5-contact">Learn more &gt;</p>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={contentVariant}
            className="block-item"
          >
            <motion.h3
              initial="hidden"
              animate={controls}
              variants={titleVariant}
              className="page5-name"
            >
              Technical support.
            </motion.h3>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={contentVariant}
              className="email"
            >
              <a href="mailto:support@maxius.io">
                <p className="page5-contact">support@maxius.io</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page5;
