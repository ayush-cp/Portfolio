import React from 'react'
import blood from "../assets/project.png"
import buddy from "../assets/buddy.png"
import paint from "../assets/paintapp.png"
import photo from "../assets/photogallery.png"
export default function Projects() {
    const projects = [{
        "name": "BloodFinder",
        "description": "This is a web application which can be used to search for blood donors in your area. User can look for donors by specifiying the blood group and the resident state. User can register to be a donor as well and provide their contact and adress info for the needy.",
        "image": blood,
        "link": "https://blood-finder-chi.vercel.app/"
    },
{
 "name": "BuddyCrush",
        "description": "This is a clone of BuddyCrush. It is a habit tracking application which involves creating and joining groups which targets a single goal or habit, when the task is completed then the user is added on the leaderboard with a streak. Whoever has the highest streak is at the top.",
        "image": buddy
},
{
    "name": "PaintApp",
           "description": "This is a paint application which includes baisc paint functionalities such as brush size and brush color. The user can adjust the size of the brush and the color can changed as well. The cursor tracks the brush and mouse hold enables user to draw on the canvas.",
           "image": paint
   },
   {
    "name": "PhotoGallery",
           "description": "A photo gallery application, involving only the user interface. It consist of different topics which involves different images under those images.",
           "image": photo
   }]
  return (
    <div className='projects' id='projects'>
        <h2>Projects</h2>
        <div className="projectList">
            {projects.map(project=>(
                   <div className="project" key={project.name}>
                   <div className="projectImage">
                   <img src={project.image} alt="ProjectImage" />
                   <div className="projectImageCovers"></div>
   
                   </div>
                   <div className="projectDesc">
                       <h3>{project.name}</h3>
                       <span>{project.description}</span>
                       {project.link&& 
                       <a href={project.link} target='_blank'>Visit Site</a>
                       }
                   </div>
               </div>
              
            ))}
         
        </div>
    </div>
  )
}
