import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {customeInput,customSelect} from './fields';
import {validate, minLength,maxLength,required,matchPassword,asyncValidate} from './validation'


class RegisterForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="RegisterForm">
              <form onSubmit={handleSubmit}>
                  <div>
                    <Field name="name" component={customeInput} type="text" label="name"
                      validate={[required,minLength,maxLength]}
                      normalize={str => str.toUpperCase()}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component={customeInput}
                      type="email" label="email"
                      validate={[required]}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component={customeInput}
                      type="password" label="password"
                      validate={[required]}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword">Password</label>
                    <Field name="confirmPassword" component={customeInput}
                      type="password" label="confirm password"
                      validate={[required,matchPassword]}
                    />
                  </div>
                  <div>
                    <Field name="preference"
                      component={customSelect}
                      value1="tabs" value2="space" label="choose preference"/>
                  </div>
                  <div>
                    <Field name="newsletter" component={customeInput} type='checkbox' label="Sign up to Newsletter?"/>
                  </div>
                  <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
  form:"register",
  asyncValidate,
  asyncBlurFields:['name']
})(RegisterForm)
