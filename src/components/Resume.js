import React from "react";
import ResumeRow from "./ResumeRow";
import { Grid, Segment } from "semantic-ui-react";

const Resume = ({ data }) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        {data.map(section => {
          return <ResumeRow data={section} />;
        })}
      </Grid.Column>
      <Grid.Column width={4}>
        <Segment>
          <h2>Contact</h2>
          <p>(613) 618-7938 kevin.geng@quarksys.ca</p>
        </Segment>
        <Segment>
          <h2>Links</h2>
          <a href="https://github.com/keving3ng">Github</a>
          <br />
          <a href="https://linkedin.com/in/kgeng">LinkedIn</a>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Resume;
