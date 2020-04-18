import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Component
const InitForm = (props) => {
    return (
      <div>
        <form action="">
          <div>
            <label htmlFor=""></label>
            <Field 
              name="name"
              placeholder="Enter your name"
              type="text"
              component="input"></Field>
          </div>
        </form>
      </div>
    )
  };
  
  export default reduxForm({
    form: 'initForm'
  })(InitForm);
  