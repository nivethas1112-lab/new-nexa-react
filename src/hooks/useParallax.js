import { useState, useEffect } from 'react';

/**
 * A simple hook that returns a translate value based on scroll position.
 * @param {number} speed - The speed of the parallax (e.g., 0.1 for slow, 0.5 for fast)
 * @returns {number} - The translateY value
 */
const useParallax = (speed = 0.2) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export default useParallax;
