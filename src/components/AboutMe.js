import React from "react";
import strings from "../res/strings";

export default function AboutMe() {
  return (
    <div className="AboutMeWrapper">
      <div className="CircleCol">
        <div className="CircleContainer">
          <div className="Circle" />
          <div className="CircleText">
            <div className="Title">{strings.aboutMe.title}</div>
            <div className="Subtitle">{strings.aboutMe.subtitle1}</div>
            <div className="Subtitle">{strings.aboutMe.subtitle2}</div>
            <div className="Subtitle">{strings.aboutMe.subtitle3}</div>
            <div className="Subtitle">{strings.aboutMe.subtitle4}</div>
          </div>
        </div>
      </div>

      <div className="Content">
        <div id="triangle-up" />
        <div className="Content1">{strings.aboutMe.content1}</div>
        <br />
        <div className="Content2">
          {strings.aboutMe.content2}
          {strings.aboutMe.content2}
          {strings.aboutMe.content2}
          {strings.aboutMe.content2}
          {strings.aboutMe.content2}
          {strings.aboutMe.content2}
          {strings.aboutMe.content2}
        </div>
      </div>
    </div>
  );
}
