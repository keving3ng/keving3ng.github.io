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
              paddingTop: "40px",
              paddingBottom: "20px"
            }}
          >
            <Grid>
              <Grid.Column width={3}>
                <div />
              </Grid.Column>
              <Grid.Column width={9}>
                <font size="+9" color="#F7C877">
                  Kevin{" "}
                </font>
                <font size="+9" color="#F7C877">
                  Geng
                </font>
                <br />
                <font size="+3">Software Engineering Student</font>
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
