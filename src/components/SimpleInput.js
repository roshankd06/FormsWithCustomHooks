import React from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {value: enteredName,
        isValid: enteredNameisValid,
        hasError: nameInputHasError, 
        valueChangeHandler: nameChangedHandler, 
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
      } = useInput(value => value.trim() !== '')

  const {value: enteredEmail, 
        isValid: enteredEmailIsValid, 
        hasError: emailInputHasError, 
        valueChangeHandler: emailChangeHandler, 
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
      } = useInput(value => value.includes('@'))

  let formIsValid = false

    if(enteredNameisValid && enteredEmailIsValid){
      formIsValid = true
    }

  const formSubmissionHandler = event => {
    event.preventDefault()

    //adding validation
    if(!enteredNameisValid){
      return
    }

    console.log(enteredName)



    //resetting the input box
    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control '
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' 
               id='name' 
               onChange={nameChangedHandler} 
               onBlur={nameBlurHandler} 
               value={enteredName} 
               />
        {nameInputHasError && <p className="error-text">Name cannot be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' 
               id='name' 
               onChange={emailChangeHandler} 
               onBlur={emailBlurHandler} 
               value={enteredEmail} 
               />
        {emailInputHasError && <p className="error-text">Email cannot be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
