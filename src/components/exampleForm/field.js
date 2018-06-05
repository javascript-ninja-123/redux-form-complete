import React,{Fragment} from 'react';
import './form.css';
import cx from 'classnames'

export const ExampleInput = (props) => {
  const {input,label,type,meta} = props;
  const getValidityClassName = meta => {
    if(meta.asyncValidating){
      return 'async-validating'
    }
  }
  return(
    <div className={cx(
      getValidityClassName(meta)
    )}>
      <label>{label}</label>
      <input type={type} {...props.input} placeholder={props.placehoder}/>
      {meta.error && meta.touched && <div style={{color:'red'}}>{meta.error}</div>}
      {meta.warning && meta.touched && <div style={{color:'orange'}}>{meta.warning}</div>}
    </div>
  )
}

export const ExampleSelect = (props) => {
    const {input,label,type,meta} = props;
  return(
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option/>
        {
          props.values.map((v,index) => {
            return (
              <option value={v.value} key={index}>{v.value}</option>
            )
          })
        }
      </select>
      {meta.error && meta.touched && <div style={{color:'red'}}>{meta.error}</div>}
    </div>
  )
}
