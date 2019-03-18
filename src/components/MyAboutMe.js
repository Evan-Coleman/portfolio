import React from "react";
import strings from "../res/strings";

export default function MyAboutMe() {
  return (
    <div className="AboutMeWrapper">
      <div className="CircleCol">
        <div className="CircleContainer">
          <div className="Circle" />
          <div className="CircleText">
            <div className="Title">{strings.myaboutme.title}</div>
            <div className="Subtitle">{strings.myaboutme.subtitle1}</div>
            <div className="Subtitle">{strings.myaboutme.subtitle2}</div>
            <div className="Subtitle">{strings.myaboutme.subtitle3}</div>
            <div className="Subtitle">{strings.myaboutme.subtitle4}</div>
          </div>
        </div>
      </div>

      <div className="Content">
        <div className="Content1">{strings.myaboutme.content1}</div>
        <br />
        <div className="Content2">{strings.myaboutme.content2}</div>
      </div>
    </div>
  );
}
