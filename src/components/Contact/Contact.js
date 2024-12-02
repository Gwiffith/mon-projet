import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.scss';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email envoyé avec succès :', result.text);
          alert("Votre message a été envoyé avec succès !");
        },
        (error) => {
          console.log("Erreur lors de l'envoi de l'email :", error.text);
          alert("Une erreur est survenue, veuillez réessayer.");
        }
      );

    e.target.reset(); // Réinitialise le formulaire après l'envoi
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Me contacter
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Je serais ravi d'échanger avec vous sur vos projets, vos idées, ou simplement pour discuter du développement web. N'hésitez pas à me contacter via les moyens ci-dessous :
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="user_name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit" className="cta-button">Envoyer</button>
      </motion.form>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Retrouvez-moi également sur :
      </motion.h3>
      <ul className="social-links">
        <li>
          <a href="mailto:bertrand.gatinier@gmail.com">
            <FaEnvelope className="social-icon" /> Mail
          </a>
          <p>N'hésitez pas à m'envoyer un e-mail, je vous répondrai le plus rapidement possible.</p>
        </li>
        <li>
          <a href="https://github.com/Gwiffith" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" /> GitHub
          </a>
          <p>Découvrez mes projets ici.</p>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bertrand-gatinier" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <p>Retrouvez moi sur LinkedIn.</p>
        </li>
      </ul>
    </motion.section>
  );
}

export default Contact;
