import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://linktr.ee/AyushSRawat" target="_blank" className="items">
            <FaLaptopCode className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/ayush-rawat-209614139/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/Ayush-S-Rawat" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:ayushrawat772002@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
          <a href="https://www.instagram.com/rawat.7_7.ayush/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
