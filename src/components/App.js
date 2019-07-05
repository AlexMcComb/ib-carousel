import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import Arrownext from "./nextArrow";
import Arrowprev from "./prevArrow";
import "./App.css";

const cards = [
  "https://images.pexels.com/photos/1249214/pexels-photo-1249214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"
];

export default function App() {
  const [count, setCount] = useState(0);
  const [nextArrow, nextToggled] = useState(false);
  const [prevArrow, prevToggled] = useState(false);

  const transitions = useTransition(count, count, {
    from: {
      opacity: 0,
      marginTop: -210,
      position: "absolute",
      boxShadow: "0px 100px 20px 0px rgba(0,0,0,0.4)"
    },
    enter: { opacity: 1, marginTop: 200, position: "aboslute" },
    leave: { opacity: 0, position: "aboslute" },
    config: { tension: 60, friction: 7 }
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
      <Arrownext nextSlide={nextSlide} nextArrow={nextArrow} />
      <Arrowprev prevSlide={prevSlide} prevArrow={prevArrow} />
    </div>
  );
}
