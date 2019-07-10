import React from "react";
import ResumeRow from "./ResumeRow";
import { Grid, Segment } from "semantic-ui-react";

const Resume = ({ data }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        {data.map(section => {
          return <ResumeRow key={section.section} data={section} />;
        })}
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>
          <h2>Contact</h2>
          <p>(613) 618-7938 kevin.geng@quarksys.ca</p>
        </Segment>
        <Segment>
          <h2>Links</h2>
          <form
            action="https://github.com/keving3ng/"
            style={{ display: "inline-block" }}
          >
            <button
              className="ui basic icon button"
              style={{ marginBottom: "5px" }}
              type="submit"
            >
              <i className="github icon" />
            </button>
          </form>
          <form
            action="https://linkedin.com/in/kgeng/"
            style={{ display: "inline-block" }}
          >
            <button
              className="ui blue icon button"
              style={{ marginBottom: "5px" }}
              type="submit"
            >
              <i className="linkedin icon" />
            </button>
          </form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Resume;
