import React from "react";
import { Field, reduxForm } from "redux-form";

class PostForm extends React.Component {
  renderError({ error, touched }) {
    // destructurig out the error and touched properties.
    if (touched && error) {
      // if the user has touched the form and there is an
      // error then display error inside of header.
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    // No errors visible by default. Clicking in and out
    // of a blank field produces a red error message.
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
      // input {...input} takes all the input object's
      // properties and adds them as props to the input element.
      // Meta decides whether or not to show the error,
      // when renderError is called.
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
          // onSubmit is the name of the prop passed down to the form.
          // Called anytime the form is submitted. this.props.handleSubmit
          // is a callback function provided by redux form, which is called
          // with the onSubmit callback method. handleSubmit automatically
          // receives the event object and automtially calls prevent default.
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
  // Returns an object placing a key-value pair with
  // the name of the field and the error message for
  // each invalid field... I.E. errors = { title: 'You must enter a title'}
};

export default reduxForm({
  form: "postForm",
  checkForm
})(PostForm);
