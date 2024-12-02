import React from 'react';
import ProjectGrid from './ProjectGrid/ProjectGrid';
import './Projects.scss';
import projectData from '../../Projects.json';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <ProjectGrid projects={projectData} />
    </section>
  );
}

export default Projects;

