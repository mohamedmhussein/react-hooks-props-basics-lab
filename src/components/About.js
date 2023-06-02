import React from "react";
//import { user } from "../data/user";
// import Links from "./Links";
function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* <Links link1={user.links.github} link2={user.links.linkedin} /> */}
    </div>
  );
}

export default About;
