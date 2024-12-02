import React, { useState } from 'react';
import Collapse from '../Collapse/Collapse';
import './ProjectCard.scss';

function ProjectCard({ title, description, image, link, github, logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <img src={logo} alt={`${title} logo`} className="project-logo" />
        
        {/* Collapse Component */}
        <Collapse
          title="Description"
          isOpen={isOpen}
          toggleCollapse={toggleCollapse}
        >
          <p>{description}</p>
        </Collapse>

        {/* Link to the Project */}
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Voir le projet
        </a>
        {/* Link to the Repository */}
        <a href={github} target="_blank" rel="noopener noreferrer" className="project-repo">
          Voir le repository
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

