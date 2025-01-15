"use client";
import React, { useEffect, useState } from "react";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/page4";
import Page5 from "@/components/Page5";
import "fullpage.js/dist/fullpage.css";
import { toggleClass } from "@/utils/changeColor";
import { ToggleMenu } from "@/components/ui/toggle-menu";

const Home: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const loadFullPage = async () => {
      const fullpage = (await import("fullpage.js")).default;
      new fullpage("#fullpage", {
        licenseKey: "gplv3-license",
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: "right",
        anchors: [
          "firstPage",
          "secondPage",
          "thirdPage",
          "fourthPage",
          "fifthPage",
        ],
        normalScrollElements: ".item-box",
        credits: { enabled: false },

        onLeave: function (origin: { index: number }, destination: { index: number }) {
          console.log("now in", destination.index);
          setCurrentSection(destination.index);
        },

        beforeLeave: function (origin: { index: number }, destination: { index: number }) {
          if (
            destination.index === 1 ||
            destination.index === 2 ||
            destination.index === 4
          ) {
            toggleClass(".logo", "white-text");
            toggleClass("#fp-nav", "white-bg");
            toggleClass(".changeLang", "white-text");
            toggleClass(".btn-toggle", "white-text");
          } else {
            toggleClass(".logo", "white-text", false);
            toggleClass("#fp-nav", "white-bg", false);
            toggleClass(".changeLang", "white-text", false);
            toggleClass(".btn-toggle", "white-text", false);
          }
        },
      });
    };

    loadFullPage();
  }, []);

  return (
    <div>
      <div id="fullpage" className="full_page">
        <Page1 currentSection={currentSection} />
        <Page2 currentSection={currentSection} />
        <Page3 currentSection={currentSection} />
        <Page4 currentSection={currentSection} />
        <Page5 currentSection={currentSection} />
      </div>
      <div className="logo">
        <a href="#firstPage">MAXIUS</a>
      </div>
      <ToggleMenu language={language} onLanguageChange={setLanguage} />
    </div>
  );
};

export default Home;
