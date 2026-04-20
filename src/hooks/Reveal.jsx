import React from 'react';
import useScrollAnimation from './useScrollAnimation';

/**
 * A wrapper component that applies a slide-up animation when it enters the viewport.
 * @param {React.ReactNode} children - The content to animate
 * @param {string} className - Optional additional classes
 * @param {string} delay - Optional delay class (delay-1, delay-2, etc.)
 */
const Reveal = ({ children, className = '', delay = '' }) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal-text ${isVisible ? 'visible' : ''} ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
