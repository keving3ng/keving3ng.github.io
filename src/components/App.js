import React from "react";
import Resume from "./Resume";
import { Container, Header, Grid } from "semantic-ui-react";
import content from "./content.json";

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#77a6f7" }}>
        <Container>
          <Header
            className="ui huge header"
            textAlign="left"
            style={{
              paddingTop: "60px",
              paddingBottom: "20px"
            }}
          >
            <Grid>
              <Grid.Column width={3}>
                <div />
              </Grid.Column>
              <Grid.Column width={9}>
                <font style={{ fontSize: "4em", color: "#e7cc18" }}>
                  Kevin Geng
                </font>
                <br />
                <font size="5">Software Engineering Student</font>
              </Grid.Column>
            </Grid>
          </Header>
          <Resume data={content} />
        </Container>
      </div>
    );
  }
}

export default App;
