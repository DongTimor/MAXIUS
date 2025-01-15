import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./Component.scss";
import { SlickCarousel } from "./ui/slick-carousel";
import { SectionProps } from "@/types";

const Page4: React.FC<SectionProps> = ({ currentSection }) => {
  const controls = useAnimationControls();
  useEffect(() => {
    if (currentSection === 3) {
      controls.set("hidden");
      setTimeout(() => {
        controls.start("visible");
      }, 500);
    }
  }, [currentSection, controls]);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(settings);

  const titleVariant = {
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

  const contentVariant = {
    hidden: {
      opacity: 0,
      x: -200,
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

  return (
    <section id="section4" className="page page4 section">
      <div className="page4-container">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={titleVariant}
          className="title"
        >
          STORY
        </motion.h1>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={contentVariant}
          className="carousel-container"
        >
          <SlickCarousel {...settings}>
            <div className="item-history" style={{ marginBottom: 'auto', minHeight: '45px' }}>
              <div className="year">
                <p className="yearHistory">History</p>
              </div>
              <div className="item-box">
                <div className="item-year en">
                  <h2 className="en">2021</h2>
                  <p>
                    Rebrand the Company name to Maxius
                    <br />
                    1st Pan-Governmental Information Resource Integration HW3
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">2020</h2>
                  <p>
                    2nd construction of AI-based adaptive security system
                    <br />
                    SPC Certification: TOP 5 Rank record in the world of storage
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">2019</h2>
                  <p>
                    Development of Genome Analysis System Semiconductor and HPC
                    Storage
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">2018</h2>
                  <p>
                    Development of small supercomputers using high performance
                    system semiconductors
                    <br />
                    Certified by International TPC
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">2017</h2>
                  <p>
                    Confirmation of excellent product for reducing standby power
                    (Korea Energy Agency)
                    <br />
                    Technology Innovation Award
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">2016</h2>
                  <p>
                    Obtain Certificate of Conformity registered for broadcasting
                    and communication equipment (National Radio Research
                    Institute)
                    <br />
                    Sign MOU Agreement with KT ds
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">2015</h2>
                  <p>
                    Awarded IT Convergence Entrepreneur
                    <br />
                    Awarded Korean Patent Technology Award (Sejong the Great
                    Award)
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">2010</h2>
                  <p>
                    Internationally develop the first PCI Interface Type storage
                    board SSD product
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">1996</h2>
                  <p>Company established</p>
                </div>
              </div>
            </div>

            <div className="item-history">
              <div className="year">
                <p className="yearPartners">Partners</p>
              </div>
              <div className="item-box">
                <div className="item-year en">
                  <h2 className="en">1000 corporate Partners</h2>
                  <p>
                    Cheongwadae, KHNP, Ministry of National Defense,
                    <br />
                    Gunpo city, Korea Agro-Fisheries & Food Trade Corporation,
                    JeollaNamdo, KMRB, JDC,
                    <br />
                    Korea Housing Finance Corporation,
                    <br />
                    Gyeonggi Provincial Police Agency, NCIS, KPIC,
                    <br />
                    Supreme Court of Korea, IPET, LH, National Gugak Center,
                    <br />
                    Korea Workers Compensation & Welfare Service
                    <span>
                      {" "}
                      More than 1,000 government-related companies, including
                      them
                    </span>
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">250 Additional corporate Partners</h2>
                  <p>
                    KAIST, Seoul National University, Dongguk University, Pusan
                    National University, Incheon National University, ETRI,
                    Seoyeong University,
                    <br />
                    Telecommunications Technology Association,
                    <br />
                    Sunmoon University, Namseoul University,
                    <br />
                    Chungnam National University, Gachon University,
                    <br />
                    Myongji University
                    <span>
                      More than 250 companies related to education, including
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="item-history">
              <div className="year">
                <p className="yearPatents">Patents</p>
              </div>
              <div className="item-box">
                <div className="item-year en">
                  <h2 className="en">High-speed data I/O semiconductor Chip</h2>
                  <p>
                    FPGA/CPLD/ASIC design and manufacturing technology, possess
                    TPU development capability
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">Intelligent Pattern Analysis Algorithm</h2>
                  <p>
                    Hybrid Cache algorithm that follows data pattern analysis
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">OS and SSD optimization</h2>
                  <p>
                    Device Driver optimization technology differing for each OS,
                    storage resource management technology
                  </p>
                </div>
              </div>
            </div>

            <div className="item-history">
              <div className="year">
                <p className="yearAwards">Awards</p>
              </div>
              <div className="item-box">
                <div className="item-year en">
                  <h2 className="en">
                    Awarded the Sejong Award at the KR Patent Awards
                  </h2>
                  <p>
                    Received the highest domestic patent award for outstanding
                    performance and energy-saving technology
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">
                    Certified by Korea Excellent Product Designation
                  </h2>
                  <p>
                    Certification of the only excellent procurement registered
                    product in Korea in the server field that has been
                    recognized for its high-performance system quality
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">Korean Green Technology Certificate</h2>
                  <p>
                    Possessing eco-friendly technology that ensures the highest
                    performance and maximum efficiency
                  </p>
                </div>
                <div className="item-year en">
                  <h2 className="en">Korea TPC-C Certification</h2>
                  <p>
                    Certified for AI high-performance computing technology and
                    performance equipped with an in-memory DB by receiving the
                    first internationally recognized TPC-C
                  </p>
                </div>
              </div>
            </div>
          </SlickCarousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Page4;
