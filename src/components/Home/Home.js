import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { ReactTyped } from 'react-typed';
import './Home.scss';

function Home() {
  // Initialiser les particules avec loadSlim
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Particules uniquement dans la section Home */}
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#D35400", // Couleur des particules
              },
              links: {
                color: "#D35400",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                outModes: {
                  default: "bounce",
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "square",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Contenu de la bannière */}
      <div className="home-content">
        {/* Wrapper pour le titre */}
        <div className="h1-wrapper">
          <h1>
            <ReactTyped
              strings={['Bertrand Gatinier', 'Développeur Frontend']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h1>
        </div>
        <div className="home-description">
          <p>Portfolio</p>
          <a href="#about" className="cta-button">En savoir plus</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
