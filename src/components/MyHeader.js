import React from "react";
import { Link } from "react-router-dom";
import strings from "../res/strings";
import images from "../res/images";

export default function MyHeader() {
  return (
    <div className="MyHeaderWrapper">
      <img
        className="ProfilePicture"
        src={images.header.profileImage}
        alt={strings.myheader.profilePicturePlaceholder}
      />
      <div className="Intro">
        <div className="Title">{strings.myheader.aboutme.title}</div>
        <br />
        <div className="Subtitle">{strings.myheader.aboutme.subtitle}</div>
        <div className="Spacer" />
        <span className="Content">{strings.myheader.aboutme.content}</span>

        <div className="CtaButton">
          <a className="CtaButton" href={strings.myheader.email}>
            {strings.myheader.aboutme.contactbutton}
          </a>
        </div>
      </div>
    </div>
  );
}
