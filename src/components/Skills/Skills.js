import React from "react"; 
import SkillCard from './SkillCard/SkillCard';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNode } from 'react-icons/fa';
import { MdCss, MdHtml } from "react-icons/md";
import './Skills.scss';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
            >
                Mes compétences
            </motion.h2>
            <div className="skills-list">
                {[
                    { name: 'HTML', icon: <MdHtml />, level: 2, color: "#E44D26" },
                    { name: 'CSS', icon: <MdCss />, level: 2, color: "#1572B6" },
                    { name: 'JavaScript', icon: <FaJs />, level: 2, color: "#F7DF1E" },
                    { name: 'React', icon: <FaReact />, level: 2, color: "#61DBFB" },
                    { name: 'NodeJS', icon: <FaNode />, level: 1, color: "#3C873A" },
                ].map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card-wrapper"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <SkillCard name={skill.name} icon={skill.icon} level={skill.level} color={skill.color} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
