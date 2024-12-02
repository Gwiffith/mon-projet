import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { motion } from 'framer-motion';

function ProjectGrid({ projects }) {
  // Variants pour l'animation d'apparition
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Intervalle entre l'apparition de chaque enfant
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="projects-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {projects.map((project, index) => {
        // Charger dynamiquement les images et les logos
        const projectImage = require(`../../../images/${project.image}`);
        const projectLogo = require(`../../../images/${project.logo}`);

        return (
          <motion.div key={index} variants={cardVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={projectImage}
              link={project.link}
              github={project.github}
              logo={projectLogo}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default ProjectGrid;