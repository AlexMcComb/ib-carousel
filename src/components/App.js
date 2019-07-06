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

  //I did seek help for this main hook.  I used stack overflow, but by the time someone answered I had most of it figured out.
  //I orignally was using "useSpring" for this animation, but found "useTransition" is better for an animation
  //on every image change.  The only code I used from someone else was the first argument of the "useTransition" hook
  //that is using "count" right now.  Orignally I was trying to pass the cards array there, and thought the animation
  //would update in the "animated.img" in the return when state changed there in the src tag, but it needs to be tied
  //directly to state, thus it's using the count from state to determine when to make an animation.
  //This part was not easy to figure out because their documentation is not the best.
  const transitions = useTransition(count, count, {
    from: {
      opacity: 0,
      transform: "translate3d(0,-50px,0)" //using translate instead of marginTop fixed a bug that caused the image to glitch
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,50px,0)"
    },
    leave: { opacity: 0, display: "none" },
    config: { mass: 1, tension: 75, friction: 6 } //physics logic
  });

  const prevSlide = () => {
    let prevSlide = count - 1 < 0 ? cards.length - 1 : count - 1; //if count - 1 is less than one go to the last index, else subtract 1 from count
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
        {transitions.map((
          { props, key } //take the style props and key which is the count from above and put it in animated.img
        ) => (
          <animated.img
            src={cards[count]} //updating the source based on the index of the count
            alt="carousel-img"
            key={key}
            style={props} //the third argument from the useTransition hook from above
          />
        ))}
      </div>
      <Arrowprev prevSlide={prevSlide} prevArrow={prevArrow} />{" "}
      {/* passing the count functions and the arrow toggle state to these components  */}
      <Arrownext nextSlide={nextSlide} nextArrow={nextArrow} />
    </div>
  );
}
