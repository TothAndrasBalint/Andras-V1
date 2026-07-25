import { useEffect, useRef, useState } from "react";

function FadeInSection({ children, delay = "0ms", as = "div" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      });
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const className = `fade-in-section${isVisible ? " is-visible" : ""}`;
  const style = { transitionDelay: delay };

  if (as === "li") {
    return (
      <li ref={sectionRef} className={className} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={sectionRef} className={className} style={style}>
      {children}
    </div>
  );
}

export default FadeInSection;
