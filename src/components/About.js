import React from "react";
import { image, city } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>
       I made this in {city}
    </p>
    <img src= { image } alt="I made this" />
  </div>;
}

export default About;
