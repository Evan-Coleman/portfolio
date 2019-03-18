import React from "react";
import { Link } from "react-router-dom";
import strings from "../res/strings";
import urls from "../res/urls";

export default function MyNavBar() {
  return (
    <div className="MyNavBarWrapper">
      <div className="Name">
        {strings.navbar.name.first} {strings.navbar.name.last}
      </div>
      <Link className="Nav1" to="/">
        {strings.navbar.home}
      </Link>
      <Link className="Nav2" to="/resume">
        {strings.navbar.resume}
      </Link>
      <a className="Nav3" href={urls.github}>
        {strings.navbar.github}
      </a>
      <a className="Nav4" href={urls.linkedin}>
        {strings.navbar.linkedin}
      </a>
    </div>
  );
}
