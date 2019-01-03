import React from "react";
import { Field, reduxForm } from "redux-form";

class PostForm extends React.Component {
  renderError({ error, touched }) {
    // called with meta object but destructurig out the error and touched properties.
    if (touched && error) {
      // if the user has touched the form and there is an error... Error displayed inside of header.
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    //renderInput is a function that is passed off to another component so when called its going to be called with an unknown value for This. Therefore renderInput must be an arrow function.
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    // No errors visible by default. Clicking in and out of a blank field produces a red error message.
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
      // input {...input} takes all the input object's properties and adds them as props to the input element.
      // calling renderError and passing in meta. Meta decides whether or not to show the error, which results
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          // onSubmit is the name of the prop passed down to the form. If we pass a function on the onSubmit prop down into the form the function will be called anytime the form is submitted. this.props.handleSubmit is a callback function provided by redux form, which is called with the onSubmit callback method. Whenever the form is submitted handleSubmit automatically receives the event object and automtially calls prevent default. onSubmit isn't called with an event object but with whatever values existed inside of the field inputs.
          className="ui form error"
          // error classname displays form errors
        >
          <Field name="title" component={this.renderInput} label="Title" />
          <Field
            name="description"
            component={this.renderInput}
            label="Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const checkForm = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
  // Returns an object placing a key-value pair with the name of the field and the error message for each invalid field... I.E. errors = { title: 'Yuu must enter a title}
};

export default reduxForm({
  form: "postForm",
  checkForm
})(PostForm);
