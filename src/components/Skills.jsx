import React, { useRef } from "react";
import { useElementOnScreen } from "./intersectionObserver";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      image: "https://img.icons8.com/color/480/html-5--v1.png",
    },
    {
      name: "CSS",
      image: "https://img.icons8.com/color/480/css3.png",
    },
    {
      name: "Javascript",
      image: "https://img.icons8.com/fluency/480/javascript.png",
    },
    {
      name: "React.js",
      image: "https://img.icons8.com/ultraviolet/480/react--v1.png",
    },
    {
      name: "TailwindCSS",
      image: "https://img.icons8.com/color/480/tailwind_css.png",
    },
    {
      name: "Bootstrap",
      image: "https://img.icons8.com/color/480/bootstrap--v2.png",
    },
  ];
  const headerRef = useRef(null);

  const isHeaderVisible = useElementOnScreen(headerRef, {
    threshold: 0.5,
    rootMargin: "0px",
  });
  const refs = useRef(skills.map(() => React.createRef()));
  const isSkillsVisible = refs.current.map((ref) =>
    useElementOnScreen(ref, { threshold: 0.5, rootMargin: "0px 0px 0px 0px" })
  );

  return (
    <div className="skills" id="skills">
      <div className="skillsHeading">
        <h2
          ref={headerRef}
          className={`popup ${isHeaderVisible ? "visible" : ""}`}
        >
          Skills
        </h2>
      </div>

      <div className="skillsList">
        {skills.map((skill, index) => (
          <div className={`skill slideLeft ${isSkillsVisible[index]?'visible' :''}`} key={index} ref={refs.current[index]}>
            <img src={skill.image} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
