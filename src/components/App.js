import React from "react";
import Resume from "./Resume";
import { Container, Header, Icon } from "semantic-ui-react";
import content from "./content.json";

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f7f5e6" }}>
        <Container>
          <Header
            className="ui huge header"
            icon
            textAlign="center"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              color: "#333a56"
            }}
          >
            <Icon name="user" circular />
            <font size="+9">Kevin Geng</font>
          </Header>
          <Resume data={content} />
        </Container>
      </div>
    );
  }
}

export default App;
