import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function SkillRating({ level }) {
  return (
    <div className="skill-rating">
      {[...Array(3)].map((_, index) => (
        <span key={index} className="star">
          {index < level ? <FaStar className='filled' /> : <FaRegStar className='empty' />}
        </span>
      ))}
    </div>
  );
}

export default SkillRating;
