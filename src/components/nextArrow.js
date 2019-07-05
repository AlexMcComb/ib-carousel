import React from "react";
import { animated, useSpring } from "react-spring";
import "./App.css";

export default function Arrownext(props) {
  const strokeLength = 1000;
  const nextAnimate = useSpring({
    from: { x: !props.nextArrow ? 0 : 0 },
    x: props.nextArrow ? 0 : 2000,
    config: { duration: 500, tension: 1000, friction: 1 }
  });

  return (
    <div onClick={props.nextSlide}>
      <animated.svg
        viewBox="0 0 1200 1200"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="5"
        strokeDasharray={strokeLength}
        strokeDashoffset={nextAnimate.x}
        width="10%"
      >
        <path
          d="M265.171,125.577l-80-80c-4.881-4.881-12.797-4.881-17.678,0c-4.882,4.882-4.882,12.796,0,17.678l58.661,58.661H12.5
            c-6.903,0-12.5,5.597-12.5,12.5c0,6.902,5.597,12.5,12.5,12.5h213.654l-58.659,58.661c-4.882,4.882-4.882,12.796,0,17.678
            c2.44,2.439,5.64,3.661,8.839,3.661s6.398-1.222,8.839-3.661l79.998-80C270.053,138.373,270.053,130.459,265.171,125.577z"
        />
      </animated.svg>
    </div>
  );
}
