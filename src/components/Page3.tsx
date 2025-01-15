import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./Component.scss";
import { SectionProps } from "@/types";

const Page3: React.FC<SectionProps> = ({ currentSection }) => {
  const controls = useAnimationControls();
  useEffect(() => {
    if (currentSection === 2) {
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
  const titleVariant1 = {
    hidden: {
      opacity: 0,
      y: -200,
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

  const titleVariant2 = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section id="section3" className="page page3 section">
      <div className="page3-container">
        <div className="page3-contents">
          <motion.div
            animate={controls}
            variants={parentVariants}
            className="items"
          >
            <div className="item en">
              <div className="item-content">
                <motion.p
                  initial="hidden"
                  animate={controls}
                  variants={titleVariant1}
                  className="title title_first"
                >
                  Product
                </motion.p>
                <p className="desc en">
                  <span className="highlight">High-Performance Server</span>{" "}
                  with an extensive selection of serviceable capabilities
                  <br />
                  Building <span className="highlight">IDC</span>; incorporating
                  the latest <span className="highlight">Storage</span>{" "}
                  technology applicable to various I/O devices
                  <br />
                  Various{" "}
                  <span className="highlight">Blockchain Solutions</span>,
                  including IPFS.
                  <br />
                  <br />
                  Maxius will continue to develop as a company in the global
                  market by supplying a variety of products and solutions.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                <motion.p
                  initial="hidden"
                  animate={controls}
                  variants={titleVariant2}
                  className="title title_second"
                >
                  Technology
                </motion.p>
                <p className="desc en">
                  Based on more than 20 years of research know-how <br />
                  and technology, we are the only company in Korea <br />
                  that makes HPC servers{" "}
                  <span className="highlight">using self-developed system</span>
                  <br />
                  semiconductors and{" "}
                  <span className="highlight">
                    provides solutions specialized
                  </span>
                  <br />
                  in{" "}
                  <span className="highlight">
                    the intelligent data center
                  </span>{" "}
                  in the IT industry.
                  <br />
                  <br />
                  With our services, Maxius strives to supply
                  <br />
                  differentiated products and solutions.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                <motion.p
                  initial="hidden"
                  animate={controls}
                  variants={titleVariant1}
                  className="title title_third"
                >
                  Application
                </motion.p>
                <p className="desc en">
                  Maxius &apos; miscellaneous products are used for{" "}
                  <span className="highlight">AI/genetic analysis, </span>
                  <br />
                  <span className="highlight">
                    edge computing, IDC centers,
                  </span>{" "}
                  as well as various solutions
                  <br />
                  used for vast{" "}
                  <span className="highlight">data analysis, </span>{" "}
                  <span className="highlight">distributed</span>
                  <br />
                  <span className="highlight">
                    processing functions and IPFS IDC{" "}
                  </span>
                  , etc.
                  <br />
                  <br />
                  Maxius will supply serviceable products and solutions to
                  <br />
                  varying fields through R&D and communication.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item-content">
                <motion.p
                  initial="hidden"
                  animate={controls}
                  variants={titleVariant2}
                  className="title title_fourth highlight"
                >
                  Blockchain
                </motion.p>
                <p className="desc en">
                  <span className="highlight">storage and service</span>{" "}
                  utilized in Metaverse <br />
                  <span className="highlight">
                    IPFS Storage and Application Services
                  </span>{" "}
                  in Web3.0 <br />
                  <br />
                  Maxius provides both H/W and S/W, which are optimized for
                  decentralized storage to match customer needs and create the
                  best added value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page3;
