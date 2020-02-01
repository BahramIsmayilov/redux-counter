import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MODAL_CLOSE } from '../Actions';

const Modal = ({ isOpen, name, text, close }) => {
  return (
    // <div className="container">
    <div className={`row modal ${isOpen ? `d-block` : null}`}>
      <h3>{name}</h3>
      <p>{text}</p>
      <button className="btn" onClick={close}>
        Close
      </button>
    </div>
    // </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

const mapStateToProps = ({ modalState: { isOpen, name, text } }) => {
  return { isOpen, name, text };
};

const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch({ type: MODAL_CLOSE })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
