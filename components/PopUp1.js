import { useEffect } from "react";
import "./PopUp1.css";
const PopUp1 = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="popup-1" data-animate-on-scroll>
      <div className="popup-1-inner">
        <div className="group-child12" />
      </div>
      <div className="message-submitted">Message Submitted!</div>
      <img className="icon-thumb-up" alt="" src="/-icon-thumb-up.svg" />
    </div>
  );
};

export default PopUp1;
