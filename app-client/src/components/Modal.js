import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(document.querySelector('#modal'));
};

export default Modal;
