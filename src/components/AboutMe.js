import React from "react";

export default function AboutMe() {
  return (
    <div className="AboutMeWrapper">
      <div className="columns is-mobile">
        <div className="column is-one-third">
          <div className="Name">
            <div className="FirstLast">
              <div>Evan</div>
              <div>Coleman</div>
            </div>
          </div>
        </div>
        <div className="AboutMe column">About me</div>
        <div className="Resume column">Resume</div>
        <div className="GitHub column">GitHub</div>
        <div className="Linkedin column">Linkedin</div>
        <div className="Blog column">Blog</div>
      </div>
    </div>
  );
}
