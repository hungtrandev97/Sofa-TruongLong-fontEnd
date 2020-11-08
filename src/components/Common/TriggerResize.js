import React from "react";
import PropTypes from "prop-types";

/**
 * Attaches a click event to child element
 * and triggers a window resize event when clicked
 */
const TriggerResize = (props) => {
  const resize = () => {
    // all IE friendly dispatchEvent
    const evt = document.createEvent("UIEvents");
    evt.initUIEvent("resize", true, false, window, 0);
    window.dispatchEvent(evt);
    // modern dispatchEvent way
    // window.dispatchEvent(new Event('resize'));
  };

  return React.cloneElement(React.Children.only(props.children), {
    onClick: resize,
  });
};

TriggerResize.propTypes = {
  /** only one children alloed */
  children: PropTypes.element.isRequired,
};

export default TriggerResize;
