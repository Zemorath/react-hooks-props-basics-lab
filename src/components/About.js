import React from "react";
import Links from "./Links"

function About(props) {
  const hasAbout = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {hasAbout ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
