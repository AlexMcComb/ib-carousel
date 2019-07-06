import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "./App.css";

export default function Arrownext(props) {
  const [mouse, setMouseOver] = useState(false);

  const strokeLength = 1500;
  const nextAnimate = useSpring({
    width: mouse ? "13.8%" : "13%",
    config: { tension: 500, friction: 10 }
  });

  const onHover = () => {
    setMouseOver(!mouse);
  };

  return (
    <div
      onClick={props.nextSlide}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <animated.svg
        viewBox="0 0 100 100"
        strokeDasharray={strokeLength}
        strokeDashoffset={nextAnimate.x}
        className="nextSvg"
        width={nextAnimate.width}
      >
        <path
          d="M22.118,44.236C9.922,44.236,0,34.314,0,22.118S9.922,0,22.118,0s22.118,9.922,22.118,22.118S34.314,44.236,22.118,44.236
			z M22.118,1.5C10.75,1.5,1.5,10.749,1.5,22.118c0,11.368,9.25,20.618,20.618,20.618c11.37,0,20.618-9.25,20.618-20.618
			C42.736,10.749,33.488,1.5,22.118,1.5z"
        />
        <path
          d="M19.341,29.884c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.292-0.293-0.768,0-1.061l6.796-6.804l-6.796-6.803
			c-0.292-0.293-0.292-0.769,0-1.061c0.293-0.293,0.768-0.293,1.061,0l7.325,7.333c0.293,0.293,0.293,0.768,0,1.061l-7.325,7.333
			C19.725,29.811,19.533,29.884,19.341,29.884z"
        />
      </animated.svg>
    </div>
  );
}
