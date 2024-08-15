import React, { useRef } from 'react';
import blood from "../assets/project.png";
import buddy from "../assets/buddy.png";
import paint from "../assets/paintapp.png";
import photo from "../assets/photogallery.png";
import { useElementOnScreen } from './intersectionObserver'; // Assuming this is a custom hook

export default function Projects() {
  const projects = [
    {
      name: "BloodFinder",
      description: "This is a web application which can be used to search for blood donors in your area. User can look for donors by specifying the blood group and the resident state. User can register to be a donor as well and provide their contact and address info for the needy.",
      image: blood,
      link: "https://blood-finder-chi.vercel.app/"
    },
    {
      name: "BuddyCrush",
      description: "This is a clone of BuddyCrush. It is a habit tracking application which involves creating and joining groups which targets a single goal or habit, when the task is completed then the user is added on the leaderboard with a streak. Whoever has the highest streak is at the top.",
      image: buddy
    },
    {
      name: "PaintApp",
      description: "This is a paint application which includes basic paint functionalities such as brush size and brush color. The user can adjust the size of the brush and the color can be changed as well. The cursor tracks the brush and mouse hold enables user to draw on the canvas.",
      image: paint
    },
    {
      name: "PhotoGallery",
      description: "A photo gallery application, involving only the user interface. It consists of different topics which involve different images under those images.",
      image: photo
    }
  ];

  // Create refs for each project image and description
  const refs = useRef(projects.map(() => React.createRef()));

  // Check visibility for each project
  const visibility = refs.current.map(ref => useElementOnScreen(ref, { threshold: 0.2, rootMargin: '0px 0px 0px 0px' }));

  return (
    <div className='projects' id='projects'>
      <h2 ref={refs.current[0]} className={`popup ${visibility[0] ? 'visible' : ''}`}>Projects</h2>
      <div className="projectList">
        {projects.map((project, index) => (
          <div className="project" key={project.name}>
            <div className={`projectImage slideLeft ${visibility[index] ? 'visible' : ''}`} ref={refs.current[index]}>
              <img src={project.image} alt="ProjectImage" />
              <div className="projectImageCovers"></div>
            </div>
            <div className={`projectDesc slideRight ${visibility[index] ? 'visible' : ''}`} ref={refs.current[index]}>
              <h3>{project.name}</h3>
              <span>{project.description}</span>
              {project.link &&
                <a href={project.link} target='_blank' rel='noopener noreferrer'>Visit Site</a>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
