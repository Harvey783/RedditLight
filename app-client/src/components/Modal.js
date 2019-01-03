import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  // defined functional component to receive some number of props
  return ReactDOM.createPortal(
    // A portal allows us to render some element not as a direct child. We can instead render that element or that component as a child of some other element inside our HTML structure... To create a portal we return a reference or a call to react on Create portal. The first argument is going to be some JSX. The second argument is going to be a reference to a HTML element... PostDelete renders modal. Modal inserted as child to that div with the ID of modal in public/index.html
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        // whenever a event occurs an event argument or event object is the argument. And on that event argument we can call e.stopPropagation to make sure that that event does not continue to bubble up causing the window to get dismissed by navigating away
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
