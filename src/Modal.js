// src/Modal.js
import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ onClose, children }) => {
  const [isExiting, setIsExiting] = useState(false); // State to manage exit animation

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState(null, null, window.location.href); // Add a new state entry

    const handlePopState = () => {
      closeModal(); // Close modal on back button press
    };

    window.addEventListener("popstate", handlePopState); // Listen for back button

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState); // Clean up listener
    };
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsExiting(true); // Start exit animation
    setTimeout(() => {
      onClose();
      setIsExiting(false); // Reset exit state
    }, 250); // Duration should match the slide-out animation duration
  };

  return (
    <div className={`modal-overlay ${isExiting ? 'hidden' : ''}`} onClick={handleOverlayClick}>
      <div className={`modal-content ${isExiting ? 'slide-out' : 'fade-in'}`}>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
