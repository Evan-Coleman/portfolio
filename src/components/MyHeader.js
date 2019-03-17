import React from "react";
import { Link } from "react-router-dom";
import strings from "../res/strings";
import images from "../res/images";
import urls from "../res/urls";

export default function MyHeader() {
  return (
    <div className="MyHeaderWrapper">
      <div className="Name">
        {strings.myheader.name.first} {strings.myheader.name.last}
      </div>
      <div className="Nav1">{strings.myheader.navbar.resume}</div>
      <a className="Nav2" href={urls.github}>
        {strings.myheader.navbar.github}
      </a>
      <a className="Nav3" href={urls.linkedin}>
        {strings.myheader.navbar.linkedin}
      </a>
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
          {strings.myheader.aboutme.contactbutton}
        </div>
      </div>
    </div>
  );
}
