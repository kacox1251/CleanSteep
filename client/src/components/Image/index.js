import React from "react";
import "../../styles/Image.css";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

//without this line, PixiPlugin and MotionPathPlugin may get dropped by your bundler (tree shaking)...
gsap.registerPlugin(PixiPlugin, MotionPathPlugin);

export function Image(props) {
    return (
        <img className="headerImage" src="./images/RockClimbingCartoon.png" alt="Rock Climbing Image" />
    );
  }

gsap.to(".headerImage", {duration: 2, x: 250, scale: 2});
// gsap.from(".cartoonImage", {opacity: 0});

export default Image;