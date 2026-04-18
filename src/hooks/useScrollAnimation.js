import { useEffect, useRef, useState } from 'react';

/**
 * Returns a [ref, isVisible] pair.
 * Attach ref to any element — isVisible becomes true once
 * the element intersects the viewport.
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // trigger only once
        }
      },
      { threshold: 0.15, ...options }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return [ref, isVisible];
};

export default useScrollAnimation;
