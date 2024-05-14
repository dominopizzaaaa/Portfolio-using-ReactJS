import React from "react";
import myPic from "./photo.jpg"

export default function Intro() {
  return (
    <div className="intro">
      <img className="domPic" src={myPic} alt="dominic" />
      <h1>Dominic Koh</h1>
      <h2 className="role">Computer Science Student</h2>
    </div>
  )
}