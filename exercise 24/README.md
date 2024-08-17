## Exposing Component APIs
```
Your working on a part of an application that contains a form which should be resettable from outside that form.
A colleague prepared a Form component that contains a couple of dummy inputs and a "Save" button that's not doing anything.
Your task is to expose a clear() function from inside that Form component so that other components that use the Form
component can call that function to reset the form.
Because that exposed clear() function should call the form's built-in reset() method (the JS form object, which is the
underlying object of the <form> element, has a reset() method that does exactly what its name implies).
After adding this feature to the Form component you should tweak the App component to establish a "connection" to the Form
component and call the newly exposed clear() method from inside the App component's handleRestart() function.

Important: In this Udemy exercise workspace, any React Hooks (and other React functions!) must be accessed directly on the
imported React object (import React from 'react') - for example: React.useState().
```
## Original Code

### App.js
```
import Form from './Form';

// Don't change the name of the 'App' 
// function and keep it a named export

export function App() {
  function handleRestart() {}

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form />
    </div>
  );
}
```
### Form.js
```
export default function Form() {
  return (
    <form>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
}
```
