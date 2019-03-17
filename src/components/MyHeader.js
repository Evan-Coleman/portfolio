import React from "react";
import { Link } from "react-router-dom";
import strings from "../res/strings";
import images from "../res/images";

export default function MyHeader() {
  return (
    <div className="MyHeaderWrapper">
      <div className="Name">
        {strings.header.name.first} {strings.header.name.last}
      </div>
      <div className="Nav1">{strings.header.navBar.resume}</div>
      <Link className="Nav2" to="https://github.com/evan-coleman">
        {strings.header.navBar.github}
      </Link>
      <div className="Nav3">{strings.header.navBar.linkedin}</div>
      <img
        className="ProfilePicture"
        src={images.header.profileImage}
        alt={strings.header.profilePicturePlaceholder}
      />
      <div className="Intro">
        <div className="Title">{strings.header.aboutMe.title}</div>
        <br />
        <div className="Subtitle">{strings.header.aboutMe.subtitle}</div>
        <div className="Spacer" />
        <span className="Content">{strings.header.aboutMe.content}</span>

        <div className="CtaButton">{strings.header.aboutMe.contactButton}</div>
      </div>
    </div>
  );
}
