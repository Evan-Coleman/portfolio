import React, { Component } from "react";
import axios from "axios";
import urls from "../res/urls";
import strings from "../res/strings";

export default class MyProjects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios
      .get(urls.gitubRepoApi, {
        params: {}
      })
      .then(response => {
        const projects = response.data;
        this.setState({ projects });
        console.log(projects);
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  render() {
    return (
      <div className="MyProjectsWrapper">
        <div className="Title">{strings.myprojects.title}</div>
        <div className="Subtitle">{strings.myprojects.subtitle}</div>
        <div className="ProjectContainer">
          {this.state.projects.slice(0, 3).map(project => {
            return (
              <div className="Project" key={project.id}>
                <div className="ProjectTitle">{project.name}</div>
                <div className="ProjectSubtitle">{project.language}</div>
                <a href={project.html_url} className="ProjectLink">
                  {strings.myprojects.viewbutton}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
