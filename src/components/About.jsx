import React, {useRef} from 'react'
import { useElementOnScreen } from './intersectionObserver'

export default function About() {
  const aboutRef = useRef(null);
  const descRef = useRef(null);

  const isAboutVisible = useElementOnScreen(aboutRef, {
    threshold: 0.5,
    rootMargin: '0px'
  });

  const isDescVisible = useElementOnScreen(descRef, {
    threshold: 0.5,
    rootMargin: '0px'
  });


  return (
    <div className='about' id='about'>
        <div className="aboutMain">
          <h2 ref={aboutRef} className={` slideLeft ${isAboutVisible? 'visible' :''}`}>About Me</h2>
          <div className={`aboutDesc popup ${isDescVisible?'visible':''}`} ref={descRef}>
            <p>I am a passionate <span>Frontend Developer</span> with an eye for detail and design. Having a background in Web Development I try to create visually apealing interfaces with proper functionality. I take multiple perspectives into consideration while creating user interfaces. I have put my main focus in <span>ReactJS</span> and I constantly try to learn new technologies. I am also familiar with CSS frameworks such as Bootstrap and TailwindCSS.</p>
            </div>
            <div className="aboutContact">
              <a href='#contactme'>Contact Me</a>
            </div>
        </div>
    </div>
  )
}
