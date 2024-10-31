import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./fonts/PPNeueMachina-PlainUltrabold.otf";
import tapeTexture from "./images/32.png";
import tapeTexture_Top from "./images/23.png";
import mac_vid from "./images/128kmac.mp4";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import dynr_image from "./images/dynr_image.jpg";
import biosales_image from "./images/biosales_image.jpg";
import bioforce_image from "./images/bioforce_image.jpg";
import tutorx_image from "./images/tutorx_image.jpg";
import moody_image from "./images/moody_image.jpg";
import catalog_image from "./images/catalog_image.jpg";
import LocationPin from "./images/location.png";
import DYNR from "./DYNR/dynr_home"; // Import your DYNR component
import Sales from "./Sales/sales_home"; // Import your Sales component
import BioForce from "./BioForceGuide/bioforce"; // Import your BioForce component
import TutorX from "./TutorX/tutorx";
import Moody from "./Moody/moody";
import Modal from "./Modal"; // Import your Modal component
import Guide from "./BioForce Guidelines/guide";

function App() {
  const squareGridRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [npmStartTyped, setNpmStartTyped] = useState("");
  const [showRest, setShowRest] = useState(false);
  const [modalContent, setModalContent] = useState(null); // State to track which content to display

  const loadingSequence = [
    "",
    <span style={{ color: "green" }}>Compiled successfully!</span>,
    "",
    "You can now view hassan_portfolio in the browser.",
    "",
    <span>
      {"  Local:                   "}
      <span style={{ color: "cyan" }}>hassansajjad.me</span>
    </span>,
    <span>
      {"  Network Address:         "}
      <span style={{ color: "cyan" }}>hassansajjad.me</span>
    </span>,
    "",
    "Note: You are in *development mode*. Things are still being polished.",
    "",
    "Ready for the *next big release*? Keep an eye out for new features and updates!",
    "",
    "Status: Compilation Complete (You are all set!)",
  ];

  const openModalWithContent = (component) => {
    setModalContent(component); // Set the content to be shown in the modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null); // Reset modal content when closing
  };

  const scrollToSection = (e) => {
    e.preventDefault();
  
    const target = document.getElementById("target-section");
    if (!target) return;
  
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    const duration = 1500; // Adjust duration (in ms) for slower or faster scroll
    let startTime = null;
  
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
  
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    requestAnimationFrame(animation);
  };
  

  useEffect(() => {
    let npmStartIndex = 0;
    const npmStartString = "nppm start";

    const typingInterval = setInterval(() => {
      if (npmStartIndex < npmStartString.length) {
        setNpmStartTyped((prev) => prev + npmStartString.charAt(npmStartIndex));
        npmStartIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowRest(true), 1000);
      }
    }, 200);

    const handleScroll = () => {
      if (squareGridRef.current) {
        const rect = squareGridRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(typingInterval);
    };
  }, []);

  if (showRest) {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <pre>
          hassan@portfolio % {npmStartTyped}
          {showRest && (
            <>
              {"\n"}
              {loadingSequence.map((line, index) => (
                <React.Fragment key={index}>{line}{"\n"}</React.Fragment>
              ))}
            </>
          )}
        </pre>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="washi-tape">
        <div className="scrolling-text">
          ☻ &nbsp;&nbsp; UI &nbsp;&nbsp; ☻ &nbsp;&nbsp; UX &nbsp;&nbsp; ☻ &nbsp;&nbsp; Visual Design &nbsp;&nbsp;
          ☻ &nbsp;&nbsp; Full-Stack Development &nbsp;&nbsp; ☻ &nbsp;&nbsp; Prototyping &nbsp;&nbsp; ☻ &nbsp;&nbsp;
          Wireframing &nbsp;&nbsp; ☻ &nbsp;&nbsp; Typography &nbsp;&nbsp; ☻ &nbsp;&nbsp; App Development &nbsp;&nbsp;
          ☻ &nbsp;&nbsp; Cross-Platform Development &nbsp;&nbsp; ☻ &nbsp;&nbsp; Web Apps &nbsp;&nbsp; ☻ &nbsp;&nbsp;
        </div>
      </div>
      <div className="content-row">
        <div className="under-washi-tape">
          <p>
            Hassan crafts intuitive and engaging digital experiences, blending his expertise in UI/UX and graphic design
            with a keen eye for detail. As a final-year computer science student at LUMS, he specializes in designing
            interfaces that captivate users and enhance interaction across web and mobile platforms.
          </p>
        </div>
        <div className="video-container">
          <video src="https://myportfoliobucket-hassan.s3.eu-north-1.amazonaws.com/128kmac.mp4" autoPlay loop muted playsInline type="video/mp4" className="app-video"></video>
        </div>
        <div className="dock">
          <div className="dock-item">
            <a href="https://www.linkedin.com/in/m-hassan-sajjad/" target="_blank" rel="noopener noreferrer">
              <img src={icon1} alt="Icon 1" />
            </a>
          </div>
          <div className="dock-item">
            <a href="https://drive.google.com/file/d/1wMDUDTVXNVwb1FDPJVeqeemeDd-_4sK_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={icon2} alt="Icon 2" />
            </a>
          </div>
          <div className="dock-item">
          <a href="mailto:ihassansajjad@gmail.com">
              <img src={icon3} alt="Icon 3" />
            </a>
          </div>
          <div className="dock-item">
          <a href="#target-section" onClick={(e) => scrollToSection(e)}>
            <img src={icon4} alt="Icon 4" />
            </a>
          </div>
        </div>

      </div>
      <div className="location-address" >
        <img alt="Location Pin" src={LocationPin} className="location-pin" />
        <p>Lahore, Pakistan</p>
      </div>
      <div id="target-section"
        className={`square-grid ${isInView ? "in-view" : ""}`}
        ref={squareGridRef}
      >
        <div className="square image-square" onClick={() => openModalWithContent(<DYNR />)}>
          <img src={dynr_image} alt="DYNR Project" className="square-image" />
        </div>
        <div className="square image-square" onClick={() => openModalWithContent(<Sales />)}>
          <img src={biosales_image} alt="BioSales Project" className="square-image" />
        </div>
        <div className="square image-square" onClick={() => openModalWithContent(<BioForce />)}>
          <img src={bioforce_image} alt="BioForce Project" className="square-image" />
        </div>
        <div className="square image-square" onClick={() => openModalWithContent(<TutorX />)}>
          <img src={tutorx_image} alt="TutorX Project" className="square-image" />
        </div>
        <div className="square image-square" onClick={() => openModalWithContent(<Moody />)}>
          <img src={moody_image} alt="Moody Project" className="square-image" />
        </div>
        <div className="square image-square" onClick={() => openModalWithContent(<Guide />)}>
          <img src={catalog_image} alt="Catalog Project" className="square-image" />
        </div>
        <div style={{ height: "12vh" }}></div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}

export default App;
