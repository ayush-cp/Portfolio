import React, {useState, useEffect} from "react";
import profile from "../assets/profile.png";
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
export default function Homepage() {
  const [isVisible, setIsVisible] = useState({
    slideSide: false,
    popup: false,
    slideLeft: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const slideSide = document.querySelector('.slideSide');
      const popup = document.querySelector('.popup');
      const slideLeft = document.querySelector('.slideLeft');

      setIsVisible({
        slideSide: slideSide && isElementInViewport(slideSide),
        popup: popup && isElementInViewport(popup),
        slideLeft: slideLeft && isElementInViewport(slideLeft)
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

   
  }, []);

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
        <h1 className={`popup ${isVisible.popup ? 'visible' : ''}`}>
            <span className="intro introHi">Hi,</span>
            <span className="intro">I'm </span>
            <span className="intro introAyush"> Ayush</span>
            <span className="intro">Web Developer</span>
          </h1>
          <div className={`homepageSocials slideSide ${isVisible.slideSide ? 'visible':''}`}>
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
        <div className={`homepageImage popup ${isVisible.popup ? 'visible' : ''}`}>
          <div className="profileImage">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
