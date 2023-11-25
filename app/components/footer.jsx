import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ctm-secondary py-3 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between gap-3 text-ctm-primary md:flex-row">
        <span className="text-xs order-2">
          Copyright © 2023-2024 MRN. All Rights reserved.
        </span>

        <ul className="flex gap-5 md:order-2">
          <li>
            <a href="#">
              <picture>
                <img src="/icon-facebook.svg" alt="social icon" />
              </picture>
            </a>
          </li>
          <li>
            <a href="#">
              <picture>
                <img src="/icon-twitter.svg" alt="social icon" />
              </picture>
            </a>
          </li>
          <li>
            <a href="#">
              <picture>
                <img src="/icon-instagram.svg" alt="social icon" />
              </picture>
            </a>
          </li>
          <li>
            <a href="#">
              <picture>
                <img src="/icon-linkedin.svg" alt="social icon" />
              </picture>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
