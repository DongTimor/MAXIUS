import Link from "next/link";
import React, { useState } from "react";
import "./ToggleMenu.scss";
import { motion, AnimatePresence } from "motion/react";

interface MenuProps {
  language: "EN" | "KR";
  onLanguageChange: (lang: "EN" | "KR") => void;
}

const ToggleMenu: React.FC<MenuProps> = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menuId: string) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuWidth = 550;

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      x: menuWidth,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  return (
    <div className="menuAreaWrapper">
      <nav role="navigation">
        <div id="menuToggle">
          <div className="changeLangWrapper real">
            <div
              className={`changeLang en ${language === "EN" ? "select" : ""}`}
              onClick={() => onLanguageChange("EN")}
            >
              EN
            </div>
            <div
              className={`changeLang ${language === "KR" ? "select" : ""}`}
              onClick={() => onLanguageChange("KR")}
            >
              KR
            </div>
          </div>
          <div
            id="toggle"
            className={`btn-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <AnimatePresence>
            <motion.ul
              id="menu"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
            >
              <div className="list-menu-sidebar">
                <div className="list btn_0 active">
                  <li className="btn-items-0">Home</li>
                </div>

                <div className="list btn_1">
                  <li
                    className="btn-items-1"
                    onClick={() => toggleSubmenu("brochure")}
                  >
                    Brochure
                  </li>
                  <AnimatePresence>
                    {openSubmenu === "brochure" && (
                      <motion.div
                        className="list-items"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <BrochureLinks />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="list btn_2">
                  <li
                    className="btn-items-2"
                    onClick={() => toggleSubmenu("proposal")}
                  >
                    Proposal
                  </li>
                  <AnimatePresence>
                    {openSubmenu === "proposal" && (
                      <motion.div
                        className="list-items"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProposalLinks />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="list btn_3">
                  <li className="btn-items-3">Contact</li>
                </div>
              </div>

              <InfoSection language={language} />
            </motion.ul>
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

const BrochureLinks = () => (
  <div>
    <LinkItem href="/static/media/HJS2224.pdf" text="HJS 2224" />
    <LinkItem href="/static/media/TJS2125G.pdf" text="TJS 2125G" />
    <LinkItem href="/static/media/HJS2224.pdf" text="HGS 4024" />
    <LinkItem href="/static/media/TJS2125G.pdf" text="TJS 104S" />
    <LinkItem href="/static/media/HJS2224.pdf" text="HJS 212S+" />
    <LinkItem href="/static/media/TJS2125G.pdf" text="HSS 2224" />
  </div>
);

const ProposalLinks = () => (
  <>
    <LinkItem
      href="/static/media/IPFS-DataCenter.pdf"
      text="IPFS Data Center Development & Operation Consulting"
    />
    <LinkItem
      href="/static/media/IPFS Data Center Build Vison.68960a3a96b70ee008a6.pdf"
      text="IPFS Data Center Build Vision"
    />
    <LinkItem
      href="/static/media/Technology Application.9713a16d749b52a79634.pdf"
      text="Technology Application"
    />
  </>
);

const LinkItem = ({ href, text }: { href: string; text: string }) => (
  <div className="list-items-menu">
    <div data-item="name" className="text">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </div>
  </div>
);

const InfoSection = ({ language }: { language: string }) => (
  <div className="infoWrapper">
    <p id="adress" className={language.toLowerCase()}>
      5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do,
      Republic of Korea
      <br /> Tel 02. 851. 2662 / Fax 02. 851. 2655
    </p>
    <p className="link">
      <Link href="/">View Map</Link>
    </p>
    <br />
    <p>Company.</p>
    <p className="link">
      <a href="mailto:support@maxius.io">support@maxius.io</a>
    </p>
    <br />
    <p>Technical support</p>
    <p className="link">
      <a href="mailto:support@maxius.io">support@maxius.io</a>
    </p>
  </div>
);

export default ToggleMenu;
