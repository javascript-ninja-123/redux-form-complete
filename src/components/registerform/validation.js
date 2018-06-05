export const validate = values => {
  const errors = {}
  if(!values.name){
    errors.name = 'name is required'
  }
  if(!values.email){
    errors.email = 'email is required'
  }
  if(!values.preference){
    errors.preference = 'choose one'
  }
  return errors;
}



export const required = value =>
value ? undefined : "Value is requred"

export const minLength = value =>
value.length < 4
? "Vakye must be at least 4 characters"
: undefined

export const maxLength = value =>
value.length > 10
? "Value is too long"
: undefined


export const matchPassword = (value,allValues) =>
value === allValues.password ? undefined : 'Password must match'


export const asyncValidate = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve,ms));
  await sleep(1000)
  if(['Kent','Andy','john'].includes(values.name)){
    return  Promise.reject({
      name:"User name is taken"
    })
  }
}
