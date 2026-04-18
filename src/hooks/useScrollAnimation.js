import { useState, useCallback, useRef, useEffect } from 'react';

const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);
  
  const optionsRef = useRef(options);
  useEffect(() => {
    optionsRef.current = options;
  });

  const ref = useCallback((node) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (node) {
      // Fallback if IntersectionObserver is not supported
      if (!window.IntersectionObserver) {
        console.warn('useScrollAnimation: IntersectionObserver not supported, falling back to visible');
        setIsVisible(true);
        return;
      }

      console.log('useScrollAnimation: Observing', node.tagName, node.className || '(no class)');
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log('useScrollAnimation: TRIGGERED for', entry.target.tagName);
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { 
          threshold: 0.01, // Trigger as soon as 1% is visible
          ...optionsRef.current 
        }
      );
      
      observer.observe(node);
      observerRef.current = observer;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return [ref, isVisible];
};

export default useScrollAnimation;




