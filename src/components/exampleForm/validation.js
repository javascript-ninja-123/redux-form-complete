


export const required = value =>
value ? undefined : 'required'


export const minLength = value =>
value.length < 4
? "has to be longer than 4"
: undefined

export const maxLength = value =>
value.length > 10
? "has to be shorter than 10"
: undefined

export const asyncValidate = async values => {
  const res = await fetch('https://uinames.com/api/?amount=25')
  const result = await res.json();
  const nameArray = result.reduce((acc,val) => {
    acc.push(val.name);
    return acc;
  },[])
  if(!nameArray.includes(values.userName)){
    return {userName:"Please choose one exisiting"}
  }
}
