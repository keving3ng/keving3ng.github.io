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

  const renderSubtitle = (isLink, subtitle) => {
    if (isLink) {
      return <a href={subtitle}>{subtitle}</a>;
    } else if (subtitle.length === 0) {
      return;
    }
    return <i>{subtitle}</i>;
  };

  const renderEntries = data => {
    return data.entries.map(entry => {
      return (
        <Message key={entry.title} style={{ backgroundColor: "#FFFFFF" }}>
          <h3 style={{ marginBottom: "0px", color: "#00887a" }}>
            {entry.title}
          </h3>
          {renderSubtitle(entry.subtitleIsLink, entry.subtitle)}
          {entry.desc.map(line => {
            return <p key={hash(line)}>{line}</p>;
          })}
        </Message>
      );
    });
  };

  return (
    <Grid>
      <Grid.Column width={4}>
        <h2 style={{ color: "#d3e3fc", marginBottom: "5px" }}>
          {data.section}
        </h2>
        <hr />
      </Grid.Column>
      <Grid.Column width={12}>{renderEntries(data)}</Grid.Column>
    </Grid>
  );
};

export default ResumeRow;
