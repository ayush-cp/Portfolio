import React, { useState, useEffect } from "react";

// const isElementInViewport = (el, threshold = 0.7) => {
//   const rect = el.getBoundingClientRect();
//   const viewportHeight =
//     window.innerHeight || document.documentElement.clientHeight;

//   const elementVisibleHeight = Math.max(
//     0,
//     Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
//   );
//   const elementHeight = elementVisibleHeight/rect.height;

//   return elementHeight >= threshold;
// };

export default function Homepage() {
//   const [isVisible, setIsVisible] = useState({
//     slideSide: false,
//     popup: false,
//     slideLeft: false,
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const slideSide = document.querySelector(".slideSide");
//       const popup = document.querySelector(".popup");
//       const slideLeft = document.querySelector(".slideLeft");

//       setIsVisible({
//         slideSide: slideSide && isElementInViewport(slideSide, 1),
//         popup: popup && isElementInViewport(popup, 1),
//         slideLeft: slideLeft && isElementInViewport(slideLeft, 0.5),
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  return (
    <div className="homepage" id="home">
      <div className="homepageMain">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="homepageIntro">
          <h1 > {/* className={`popup ${isVisible.popup ? "visible" : ""}`}*/}
            <span className="intro introHi">Hi,</span>
            <span className="intro">I'm </span>
            <span className="intro introAyush"> Ayush</span>
            <span className="intro">Web Developer</span>
          </h1>
          <div
            className="homepageSocials"
          >
            <a
              href="https://github.com/ayush-cp"
              className="socials"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000"
                alt="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-panwar-61362a229/"
              className="socials"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
                alt="Linkedin"
              />
            </a>
            <a
              href="https://x.com/ayushpanwar0"
              className="socials"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
                alt="X"
              />
            </a>
          </div>
        </div>
        <div
          className= "homepageImage"
        >
          <div className="profileImage">
            {/* <img src={profile} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
