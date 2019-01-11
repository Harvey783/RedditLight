import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    // A portal renders an element or component as a
    // child of some other element. The second argument
    // is going to be a reference to a HTML element...
    // PostDelete renders modal. Modal inserted as child
    // to that div with the ID of modal in public/index.html
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        // whenever a event occurs e.stopPropagation ensures
        // the event does not continue to bubble up causing
        // the window to get dismissed by navigating away
        className="ui standard modal visible active"
      >
        <div className="header" />
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
