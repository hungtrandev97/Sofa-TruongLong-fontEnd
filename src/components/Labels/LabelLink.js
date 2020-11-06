import React from "react";
import PropTypes from "prop-types";

const COLOR_LINK = "#008cd1";

function LabelLink({ normalSentence, linkSentence, onLinkClick }) {
  return (
    <div style={{ color: "#9da6b4" }}>
      {normalSentence.concat(" ")}
      <span
        role="link"
        tabIndex="0"
        onKeyPress={() => {}}
        style={{ cursor: "pointer", color: `${COLOR_LINK}` }}
        className="font-ob-bold"
        onClick={() => {
          onLinkClick();
        }}
      >
        {linkSentence}
      </span>
    </div>
  );
}

LabelLink.propTypes = {
  normalSentence: PropTypes.string,
  linkSentence: PropTypes.string,
  onLinkClick: PropTypes.func,
};
LabelLink.defaultProps = {
  normalSentence: "",
  linkSentence: "",
  onLinkClick: () => {},
};
export default LabelLink;
