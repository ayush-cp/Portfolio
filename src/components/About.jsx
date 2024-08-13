import React from 'react'

export default function About() {

  return (
    <div className='about' id='about'>
        <div className="aboutMain">
          <h2>About Me</h2>
          <div className="aboutDesc">
            <p>I am a passionate <span>Frontend Developer</span> with an eye for detail and design. Having a background in Web Development I try to create visually apealing interfaces with proper functionality. I take multiple perspectives into consideration while creating user interfaces. I have put my main focus in <span>ReactJS</span> and I constantly try to learn new technologies. I am also familiar with CSS frameworks such as Bootstrap and TailwindCSS.</p>
            </div>
            <div className="aboutContact">
              <a href='#contactme'>Contact Me</a>
            </div>
        </div>
    </div>
  )
}
