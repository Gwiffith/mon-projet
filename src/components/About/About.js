import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './About.scss';

function About() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref.current); // Déclenche seulement une fois
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Déclenche lorsque 30% de la section est visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} id="about" className="about-section">
      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2>À propos</h2>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="about-summary">
          <motion.div
            className="about-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <img src="/images/Portrait.jpeg" alt="Bertrand Gatinier" />
          </motion.div>
          <motion.div
            className="about-text-wrapper"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <h3>Bertrand Gatinier</h3>
            <p>31 ans</p>
            <p>Développeur frontend créatif</p>
          </motion.div>
        </div>

        <motion.blockquote
          className="quote"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 1 }}
        >
          "Développer des expériences uniques, une ligne de code à la fois."
        </motion.blockquote>

        <motion.div
          className="about-text"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <p>
            Je me spécialise dans la création d'interfaces utilisateur modernes et intuitives, avec un fort accent sur l'expérience utilisateur et l'efficacité du design. Mon but est de transformer des idées en applications fluides et attractives, tout en améliorant constamment les interfaces existantes avec créativité, souci du détail, et expertise technique.
          </p>
          <p>
            J'ai récemment terminé une formation intensive de développeur front-end chez OpenClassrooms, où j'ai appris à maîtriser les technologies du web comme HTML, CSS, JavaScript, React, ainsi que les meilleures pratiques pour développer des sites performants et accessibles.
          </p>
          <p>
            Autonome et toujours curieux, j'aime me confronter à de nouveaux défis et me renseigner sur les nouveautés technologiques. Mon objectif est de perfectionner continuellement mes compétences pour proposer des solutions à la fois performantes et esthétiques.
          </p>
          <p>
            Si vous cherchez un développeur frontend rigoureux et engagé, qui saura travailler avec vous dans une atmosphère de confiance et de collaboration, n'hésitez pas à me contacter pour discuter de vos projets !
          </p>
        </motion.div>

        <motion.a
          href="#contact"
          className="cta-button"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Contactez-moi
        </motion.a>
      </motion.div>
    </section>
  );
}

export default About;
