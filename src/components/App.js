import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import Arrownext from "./nextArrow";
import Arrowprev from "./prevArrow";
import "./App.css";

const cards = [
  "https://images.pexels.com/photos/1249214/pexels-photo-1249214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1298684/pexels-photo-1298684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1013328/pexels-photo-1013328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

export default function App() {
  const [count, setCount] = useState(0);
  const [nextArrow, nextToggled] = useState(false);
  const [prevArrow, prevToggled] = useState(false);

  const transitions = useTransition(count, count, {
    from: {
      opacity: 0,
      transform: "translate3d(0,-50px,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,50px,0)"
    },
    leave: { opacity: 0, display: "none" },
    config: { mass: 1, tension: 75, friction: 6 }
  });

  const prevSlide = () => {
    let prevSlide = count - 1 < 0 ? cards.length - 1 : count - 1; //if count -1 is less than one go to the last index, else subtract 1 from count
    setCount(prevSlide);
    prevToggled(!prevArrow);
  };

  const nextSlide = () => {
    let nextSlide = count + 1 < cards.length ? count + 1 : 0; //if count + 1 is less than cards length, add one to count, else set count to 0
    setCount(nextSlide);
    nextToggled(!nextArrow);
  };

  return (
    <div>
      <div className="container">
        {transitions.map(({ props, key }) => (
          <animated.img
            src={cards[count]}
            alt="carousel-img"
            key={key}
            style={props}
          />
        ))}
      </div>

      <Arrowprev prevSlide={prevSlide} prevArrow={prevArrow} />
      <Arrownext nextSlide={nextSlide} nextArrow={nextArrow} />
    </div>
  );
}
