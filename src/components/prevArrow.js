import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "./App.css";

export default function Arrowprev(props) {
  const [mouse, setMouseOver] = useState(false);

  const prevAnimate = useSpring({
    width: mouse ? "7.3%" : "6%",
    config: { tension: 500, friction: 10 }
  });

  const onHover = () => {
    setMouseOver(!mouse);
  };

  return (
    <div
      onClick={props.prevSlide}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <animated.svg
        viewBox="0 0 45 45"
        className="prevSvg"
        width={prevAnimate.width} //changes the width based on mouse enter of leave from the useSpring hook style object
      >
        <path
          d="M22.119,44.237C9.922,44.237,0,34.315,0,22.119S9.922,0.001,22.119,0.001s22.119,9.922,22.119,22.118
			S34.314,44.237,22.119,44.237z M22.119,1.501C10.75,1.501,1.5,10.75,1.5,22.119c0,11.368,9.25,20.618,20.619,20.618
			s20.619-9.25,20.619-20.618C42.738,10.75,33.488,1.501,22.119,1.501z"
        />
        <path
          d="M24.667,29.884c-0.192,0-0.384-0.072-0.53-0.22l-7.328-7.334c-0.292-0.293-0.292-0.768,0-1.061l7.328-7.333
			c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061L18.4,21.8l6.798,6.805c0.292,0.293,0.292,0.769,0,1.061
			C25.051,29.812,24.859,29.884,24.667,29.884z"
        />
      </animated.svg>
    </div>
  );
}
