import React from "react";

export default function MyHeader() {
  return (
    <div className="MyHeaderWrapper">
      <div className="columns is-mobile">
        <div className="column is-one-third">
          <div className="Name">
            <div className="FirstLast">
              <div>Evan</div>
              <div>Coleman</div>
            </div>
          </div>
        </div>
        <div className="HeaderItem AboutMe column">About me</div>
        <div className="HeaderItem Resume column">Resume</div>
        <div className="HeaderItem GitHub column">GitHub</div>
        <div className="HeaderItem Linkedin column">Linkedin</div>
        <div className="HeaderItem Blog column">Blog</div>
      </div>

      <div className="columns">
        <div className="column">
          <img src="./img/aboutimage.png" alt="" />
        </div>
        <div className="column">
          <div className="Title">Hey there!</div>
          <div className="Subtitle">
            My name is Evan Coleman, I'm an experienced Software Engineer
          </div>
          <div className="Content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            sint provident eaque cum est dolorem magni cumque temporibus
            doloremque placeat? Ipsum tempore sit vitae fugit esse,
            exercitationem tenetur dolores eum.
          </div>
          <div className="ContactMeButton">Contact Me</div>
        </div>
      </div>
    </div>
  );
}
