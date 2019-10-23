import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="about">Projects</h2>
        <div className="projects">
          <div className="project">
            <h5>r13 Resource</h5>
            <p>
              App created for cohort to track lecture data and git commits.
              Built with Javascript and Python running Flask on a PostgreSQL
              database and deployed via Heroku. GitHub info pulled from the
              GitHub API. Lecture and exercise info pulled from Rithm website
              using Beautiful Soup. All data updated automatically with Heroku
              Scheduler. CSS framework is Materialize.
            </p>
          </div>
          <div className="project">
            <h5>Lie to ME</h5>
            <p>
              Designed and styled after the show 'Lie to Me', on a team with the
              Paul Ekman Group, who was responsible for the micro expression
              research on which the show was based.
            </p>
          </div>
          <div className="project">
            <h5>Chris Martin</h5>
            <p>React-based website</p>
          </div>
          <div className="project">
            <h5>Warbler</h5>
            <p>React-based website</p>
          </div>
          <div className="project">
            <h5>Jobly</h5>
            <p>React-based website</p>
          </div>
          <div className="project">
            <h5>Chris Martin</h5>
            <p>React-based website</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
