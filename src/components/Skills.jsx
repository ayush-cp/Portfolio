import React from 'react'

export default function Skills() {
  const skills = [{
    name: 'HTML',
    image:'https://img.icons8.com/color/480/html-5--v1.png'
  },{
    name: 'CSS',
    image:'https://img.icons8.com/color/480/css3.png'
  },{
    name: 'Javascript',
    image:'https://img.icons8.com/fluency/480/javascript.png'
  },{
    name: 'React.js',
    image:'https://img.icons8.com/ultraviolet/480/react--v1.png'
  },{
    name: 'TailwindCSS',
    image:'https://img.icons8.com/color/480/tailwind_css.png'
  },{
    name: 'Bootstrap',
    image:'https://img.icons8.com/color/480/bootstrap--v2.png'
  }]
  return (
    <div className='skills' id='skills'>
     
      <div className="skillsHeading">
      <h2>Skills</h2>
      </div>
        
      <div className="skillsList">
       {skills.map((skill, index)=>(

       <div className="skill" key={index}>
       <img src={skill.image} alt={skill.name}/>
        <span>{skill.name}</span>
       </div>
       ))}
      </div>
    </div>
  )
}
