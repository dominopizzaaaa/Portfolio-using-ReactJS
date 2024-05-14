import React from "react";
import mailpic from "./mail.webp"
import linkedinpic from "./linkedin.webp"

export default function Contact() {
  return (
    <div className="contact">
      <a href="domksj23@gmail.com" target="_blank">
        <button className="email-button">
          <img className="mini-pic" src={mailpic} alt="email-logo"></img>
          <span>Email</span>
        </button>
      </a>
      <a href="https://www.linkedin.com/in/dominic-koh-323752281" target="_blank">
        <button className="linkedin-button">
          <img className="mini-pic" src={linkedinpic} alt="linkedin-logo"></img>
          <span>Linkedin</span>
        </button>
      </a>
    </div>
  )
}