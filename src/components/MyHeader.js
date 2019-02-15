import React from "react";

export default function MyHeader() {
  return (
    <div className="MyHeaderWrapper">
      <div className="row container">
        <div className="col l2 m2 s6">
          <div className="Name">
            <div>First</div>
            <div>Last</div>
          </div>
        </div>
        <div className="HeaderItem AboutMe col l2 m2 s6">About me</div>
        <div className="HeaderItem Resume col l2 m2 s6">Resume</div>
        <div className="HeaderItem GitHub col l2 m2 s6">GitHub</div>
        <div className="HeaderItem Linkedin col l2 m2 s6">Linkedin</div>
        <div className="HeaderItem Blog col l2 m2 s6">Blog</div>
      </div>

      <div className="row container">
        <div className="col l6 m6 s12">
          <img className="ProfileImage" src="./img/aboutimage.png" alt="" />
        </div>
        <div className="AboutMeSection col l6 m6 s12">
          <div className="Title">Hey there!</div>
          <div className="Subtitle">
            My name is First Last, I'm an experienced Software Engineer
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
