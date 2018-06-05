import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {ExampleInput, ExampleSelect} from './field';
import {required, minLength,maxLength,asyncValidate} from './validation';
import './form.css';

const selectValues = [
  {
    value:'red'
  },
  {
    value:'blue'
  },
  {
    value:'grey'
  }
]

class ExampleForm extends Component {
    render() {
        const {handleSubmit,reset} = this.props;
        return (
            <div className="ExampleForm">
              <form onSubmit={handleSubmit}>
                  <div>
                      <Field
                        name="userName"
                        component={ExampleInput}
                        type="text"
                        placeholder="your username"
                        label='username'
                        validate={[required, minLength,maxLength]}
                      />
                  </div>
                  <div>
                    <Field
                      name="firstName"
                      component={ExampleInput}
                      type="text"
                      placeholder="your firstname"
                      label='First Name'
                      normalize={str => str.toUpperCase()}
                      validate={[required]}
                    />
                  </div>
                  <div>
                    <Field
                      name="lastName"
                      component={ExampleInput}
                      type="text"
                      placeholder="your lastName"
                      label='Last Name'
                        validate={[required]}
                    />
                  </div>
                  <div>
                    <Field
                      name="color"
                      component={ExampleSelect}
                      label='choose your color'
                      values={selectValues}
                      validate={[required]}
                    />
                  </div>
                  <div>
                    <button type="submit">
                      Submit
                    </button>
                    <button type="button" onClick={reset}>
                      Clear Values
                    </button>
                  </div>
                </form>
            </div>
        );
    }
}


const validate = values => {
  const errors ={};
  if(!values.userName){
    errors.userName = 'Username is required'
  }
  if(!values.firstName){
    errors.firstName ='First Name is required'
  }
  if(!values.lastName){
    errors.lastName = 'Last Name is required'
  }
  if(!values.color){
    errors.color = 'Color is required'
  }
  return errors;
}


const warn = values => {
  const warnings = {}
  if(!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(values.userName)){
    warnings.userName ='please include at least one speical character';
  }
  return warnings
}



export default reduxForm({
  form:"example",
  warn,
  asyncValidate,
  asyncBlurFields: ['userName']
})(ExampleForm)
