import React from "react";
import strings from "../res/strings";
import images from "../res/images";

export default function MyHeader() {
  return (
    <div className="MyHeaderWrapper">
      <div className="row container">
        <div className="col l2 m2 s12">
          <div className="Name">
            <div>{strings.header.name.first}</div>
            <div>{strings.header.name.last}</div>
          </div>
        </div>
        <div className="HeaderItemContainer">
          <div className="HeaderItem col l2 m3 s6  push-l2 push-m3">
            {strings.header.navBar.aboutMe}
          </div>
          <div className="HeaderItem col l2 m3 s6  push-l2 push-m3">
            {strings.header.navBar.resume}
          </div>
          <div className="HeaderItem col l2 m3 s6  push-l2 push-m3">
            {strings.header.navBar.github}
          </div>
          <div className="HeaderItem col l2 m3 s6  push-l2 push-m3">
            {strings.header.navBar.linkedin}
          </div>
          <div className="HeaderItem col l2 m3 s6  push-l2 push-m3">
            {strings.header.navBar.blog}
          </div>
        </div>
      </div>

      <div className="row container">
        <div className="col l6 m6 s12">
          {/* <img className="ProfileImage" src="./img/aboutimage.png" alt="" /> */}
          <img
            className="ProfileImage"
            src={images.header.profileImage}
            alt=""
          />
        </div>
        <div className="AboutMeSection col l6 m6 s12">
          <div className="Title">{strings.header.aboutMe.title}</div>
          <div className="Subtitle">{strings.header.aboutMe.subtitle}</div>
          <div className="Content">{strings.header.aboutMe.content}</div>
          <div className="ContactMeButton">
            {strings.header.aboutMe.contactButton}
          </div>
        </div>
      </div>
    </div>
  );
}
