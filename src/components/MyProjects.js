import React, { Component } from "react";
import axios from "axios";
import urls from "../res/urls";

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
        <div>HI</div>
        {this.state.projects.map(project => {
          return (
            <div key={project.id} className="">
              HERE: {project.url}
            </div>
          );
        })}
      </div>
    );
  }
}
