import React, {useState} from 'react'
import Projectsdata from './Projectsdata';
import Projectcard from './Projectcard';



export default function Work() {

    const projectElements = Projectsdata.map(project => {
        return <Projectcard 
        key={project.id} 
        project={project}
        />
      })



    return (
        <div id="work" className="work">
                <h2 className="work-title">Recent work</h2>
                <div className="project-list">{projectElements}</div>
        </div>
    )
}
