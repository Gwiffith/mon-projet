import React from 'react';
import { FaStar } from 'react-icons/fa';
import './SkillCard.scss';

function SkillCard({ name, level, icon, color }) {
  return (
    <div className="skill-card">
      <div className="skill-icon" style={{ color }}>
        {icon}
      </div>
      <h3>{name}</h3>
      <div className="skill-rating">
        {[...Array(3)].map((_, index) => (
          <FaStar
            key={index}
            className={`star ${index < level ? 'filled' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
