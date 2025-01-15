import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./Component.scss";
import { SectionProps } from "@/types";


const Page2: React.FC<SectionProps> = ({ currentSection }) => {
  const controls = useAnimationControls();
    useEffect(() => {
      if (currentSection === 1) {
        controls.set("hidden");
        setTimeout(() => {
          controls.start("visible");
        }, 500);
      }
    }, [currentSection, controls]);
  
    const textVariants = {
      hidden: {
        opacity: 0,
        x: "-1000px",
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.215, 0.610, 0.355, 1.000],
        },
      },
    };

  return (
    <section id="section2" className="page page2 section">
      <div className="text-container">
        <motion.div
          className="text-style"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <p className="text-one" >
            1. <span className="highlight">Self-produced</span> semiconductors
            2. Production{" "}
          </p>

          <p className="text-two" >
            and Sales of <span className="highlight">H</span>igh-
            <span className="highlight">P</span>erformance{" "}
            <span className="highlight">S</span>ervers with self-
          </p>

          <p className="text-three" >
            manufactured semiconductors 3. Construction{" "}
          </p>

          <p className="text-four" >
            of operative <span className="highlight">Block</span>
            <span className="highlight">chain IDC </span>based on high-
          </p>

          <p className="text-five" >
            performance servers 4. Establish solution relating{" "}
          </p>

          <p className="text-six" >
            <span className="tion">to Blockchain</span>
            <span className="highlight">(IPFS)</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Page2;
