import React from "react";
import { Grid, Message } from "semantic-ui-react";

const ResumeRow = ({ data }) => {
  const hash = str => {
    var hash = 0,
      i,
      chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  const renderEntries = data => {
    return data.entries.map(entry => {
      if (entry.hasSubtitle === true) {
        return (
          <Message>
            <h3 style={{ marginBottom: "0px" }}>{entry.title}</h3>
            <i>{entry.subtitle}</i>
            {entry.desc.map(line => {
              return <p key={hash(line)}>{line}</p>;
            })}
          </Message>
        );
      } else {
        return (
          <Message>
            <h3>{entry.title}</h3>
            {entry.desc.map(line => {
              return <p>{line}</p>;
            })}
          </Message>
        );
      }
    });
  };
  return (
    console.log(data),
    (
      <Grid>
        <Grid.Column width={4}>
          <h2 style={{ color: "#52658f" }}>{data.section}</h2>
        </Grid.Column>
        <Grid.Column width={12}>{renderEntries(data)}</Grid.Column>
      </Grid>
    )
  );
};

export default ResumeRow;
