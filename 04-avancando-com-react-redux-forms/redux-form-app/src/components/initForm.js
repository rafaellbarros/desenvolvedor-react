import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Component
const InitForm = ({ onClick, onChangeName }) => {


    return (
        <form action="">
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <Field 
              name="name"
              placeholder="Enter your name"
              type="text"
              component="input"
              className="form-control"
              onChange={onChangeName}>
              </Field>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={onClick}>Send</button>
          </div>
        </form>
    )
  };
  
  export default reduxForm({
    form: 'initForm'
  })(InitForm);
  