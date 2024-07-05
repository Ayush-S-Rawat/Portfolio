import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Ayush_Rawat_Resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Ayush Rawat",
        "I'm Software developer",
        "App Developer (Flutter)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            // href="https://drive.google.com/uc?export=download&id=1CFG8iafLjgd5Txpv4Jv_Ou9uZRbZJyXN"
            href="https://drive.google.com/file/d/1CFG8iafLjgd5Txpv4Jv_Ou9uZRbZJyXN/view?usp=sharing"
            className="btn btn-outline-warning my-3"
          >
            View Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
