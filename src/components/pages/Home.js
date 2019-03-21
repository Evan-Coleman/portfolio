import React from "react";
import MyAboutMe from "../MyAboutMe";
import MyHeader from "../MyHeader";
import MyProjects from "../MyProjects";

export default function Home() {
  return (
    <div>
      <MyHeader />
      <MyAboutMe />
      <MyProjects />
    </div>
  );
}
