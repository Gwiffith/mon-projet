import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './Collapse.scss';

function Collapse({ title, isOpen, toggleCollapse, children }) {
  return (
    <div className={`collapse ${isOpen ? 'is-open' : ''}`}>
      <button
        onClick={() => {
          toggleCollapse();
        }}
        className={`collapse-toggle ${isOpen ? 'open' : ''}`}
        aria-expanded={isOpen} 
      >
        {title}
        <span className="collapse-icon">
          <FiChevronDown />
        </span>
      </button>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;
