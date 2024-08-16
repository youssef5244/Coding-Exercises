## App.js:
```
import Any from './Input';
import React from 'react';
export const userData = {
  name: '',
  email: '',
};

export function App() {
const name= React.useRef();
const email= React.useRef();

  function handleSaveData() {
    userData.name = name.current.value;
    userData.email = email.current.value;

    console.log(userData);
  }

  return (
    <div id="app">
      <Any ref={name} type="text" label="Your Name" />
      <Any ref={email} type="email" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
```
## Input.js:
```
import React from 'react'

const Any = React.forwardRef( function Input({ label, ...props}, ref) {
  
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} {...props}/>
    </p>
  );
} )

export default Any;
```
