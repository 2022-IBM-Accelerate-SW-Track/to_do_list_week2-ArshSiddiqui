import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_picture_arshsiddiqui.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Arsh Siddiqui</div>
            <div className="brief_description">
                    My name is Arsh Siddiqui, and I am an upcoming junior at Virginia Tech in Blacksburg, VA
                                majoring in Computer Science and minoring in Economics. I am interested in technology, history,
                                languages, economics, and literature. So I spend a lot of time reading, watching, and listening
                                to various forms of media. One fun fact about me is that I used to be number one in the world
                                for Phineas and Ferb trivia on QuizUp.<br />
                                It's great to meet you!<br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
