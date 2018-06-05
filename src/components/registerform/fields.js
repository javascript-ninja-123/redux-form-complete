import React, {Fragment} from 'react';
import ReactJSON from 'react-json-view';
import cx from 'classnames';
import './registerform.css';
  // <ReactJSON src={props.meta}/>


const getValidityClassName = meta => {
  if(meta.asyncValidating){
    return 'async-validating'
  }
  if(meta.active){
    return;
  }
  if(meta.touched && meta.invalid){
    return 'invalid'
  }
  if(meta.touched && meta.valid){
    return 'valid';
  }
}

export const customeInput = (props) => {
  const { input,label,type,meta} = props;
  return(
    <div className={
      cx(
        'custom-input-container',
        {'flex-row-reverse': type === 'checkbox'},
        {dirty: meta.dirty},
        getValidityClassName(meta)
      )
    }>
      <input type={props.type} {...props.input}/>
      <label>{props.label}</label>
      {(meta.error && meta.touched) && <div className='feedback-text error-text'>{meta.error}</div>}
    </div>
  )
}

export const customSelect = (props) => (
  <Fragment>
    <label>{props.label}</label>
    <select {...props.input}>
      <option value={props.value1}>{props.value1}</option>
      <option value={props.value2}>{props.value2}</option>
    </select>
  </Fragment>
)
