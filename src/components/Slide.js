import React from "react";
import PropTypes from 'prop-types';

function Slide(props) {
  return (
    <>
      <h3 className="center">{props.heading}</h3>
      <p className="center">{props.text}</p>
      <img
        className="d-block w-100"
        src={props.image}
        alt={props.alt} />
        
    </>
  );
}

Slide.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Slide;