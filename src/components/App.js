import React,{Component} from 'react';
import { SubmissionError } from 'redux-form'
import RegisterForm from './registerform/form';
import ExampleForm from './exampleForm/form';


/*
  onSubmit = values => {
      window.alert(JSON.stringify(values,null,4))
  }
  getInitialValues = () => (
    {
      name:"Sung",
      email:"sung.yi.developer@gmail",
      preference:"space",
      newsletter:true
    }
  )

  */
 class APP extends Component {

    onSubmit = values => {
      console.log(values)
    }
    render() {
        return (
            <div className="APP">
              {/* <RegisterForm onSubmit={this.onSubmit} initialValues={this.getInitialValues()}/> */}
              <ExampleForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default APP
