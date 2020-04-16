import React, { useEffect, useRef } from "react";
import "../../styles/Image.css";
import { TweenMax, Linear } from "gsap";


export function Image(props) {
  let imgRef = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(imgRef, 1, {x:25, y:340}, {x:60, y:300});
    TweenMax.fromTo(imgRef, 1, {x:60, y:300}, {x:20, y:240, delay: 1});
    TweenMax.fromTo(imgRef, 1, {x:20, y:240}, {x:70, y:150, delay: 2});
    TweenMax.fromTo(imgRef, 1, {x:70, y: 150}, {x:0, y:0, delay: 3});
  })

    return (
        <img 
        className="headerImage" 
        id="headerImg"
        src="./images/RockClimbingCartoon.png" 
        alt="Rock Climbing Image" 
        ref={element => {
          imgRef = element;
        }}
        />
    );
  }

export default Image;