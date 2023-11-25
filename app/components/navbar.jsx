"use client";

import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [smallScreen, setSmallScreen] = useState(true);
  const [show, setShow] = useState(false);
  const openRef = useRef(null);
  const closeRef = useRef(null);

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    setSmallScreen(window.innerWidth < 768);

    const handleDocumentClick = (e) => {
      if (openRef.current && openRef.current.contains(e.target)) {
        setShow(true);
      } else if (closeRef.current && closeRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <>
      {/* sidebar for small screen */}
      {show && (
        <div
          ref={closeRef}
          className="w-full h-full fixed top-0 right-0 bg-ctm-accent/50 z-50"
        >
          <div
            ref={openRef}
            className="w-3/5 h-full fixed top-0 right-0 grid bg-ctm-secondary "
          >
            <ul className="flex flex-col justify-center items-center gap-10 text-ctm-primary">
              <li>
                <a href="/" className="hover:text-ctm-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-ctm-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ctm-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-ctm-accent">
                  Gallery
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="py-3 px-6 border-2 rounded-lg border-ctm-accent hover:bg-ctm-accent"
                >
                  Lets Talk
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* navbar */}
      <nav className="w-full absolute top-0 left-0 z-40">
        <div className="max-w-screen-xl mx-auto py-7 flex justify-between items-center px-5">
          <picture>
            <img src="/images/logo.svg" alt="logo" />
          </picture>

          {/* if the screen width is below 768px show hamburger menu */}
          {smallScreen ? (
            <button onClick={handleShow}>
              <picture>
                <img
                  src="/icon-hamburger.svg"
                  alt="humburger icon"
                  className="w-8"
                />
              </picture>
            </button>
          ) : (
            <ul className="flex items-center gap-x-10 text-ctm-primary">
              <li>
                <a href="/" className="hover:text-ctm-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-ctm-accent">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ctm-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-ctm-accent">
                  Gallery
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="py-3 px-6 border-2 rounded-lg border-ctm-accent hover:bg-ctm-accent"
                >
                  Lets Talk
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
