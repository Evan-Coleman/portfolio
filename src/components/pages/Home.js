import React from "react";
import MyAboutMe from "../MyAboutMe";
import MyHeader from "../MyHeader";
import MyProjects from "../MyProjects";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <div>
      <MyHeader />
      <MyAboutMe />
      <MyProjects />
      <MySkills />
    </div>
  );
}
