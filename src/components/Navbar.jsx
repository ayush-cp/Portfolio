import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [menu, setMenu] = useState(false);

  const handleClick = (item) => {
    setActive(item);
  };

  useEffect(() => {
    setActive('home');

    const handleScroll = () => {
  const sectionIds = ['home', 'about', 'projects', 'skills'];
      const sections = sectionIds.map(id =>document.getElementById(id));
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        if (sectionTop <= window.innerHeight * 0.5) {
          currentSection = sectionId;
        }
      });

      setActive(currentSection || 'Home');
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar'>
      <div className="navbarName">
        <div className="navbarHidden">
          <img
            src="https://img.icons8.com/?size=100&id=YaCYPVjtecWU&format=png&color=000000"
            alt=""
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <ul className="mobileNavList">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          )}
        </div>
        <a className='navbarMe' href="#">Ayush Panwar</a>
      </div>
      <div className="navbarList">
        <ul>
          <li><a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Home</a></li>
          <li><a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>About</a></li>
          <li><a href="#projects" className={active === 'projects' ? 'active' : ''} onClick={() => handleClick('projects')}>Projects</a></li>
          <li><a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={() => handleClick('skills')}>Skills</a></li>
        </ul>
      </div>
    </div>
  );
}
