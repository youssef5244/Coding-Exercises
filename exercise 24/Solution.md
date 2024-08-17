## App.js
```
import React from 'react';
import Form from './Form';

export function App() {
    
const form = React.useRef();

  function handleRestart() {
      form.current.clear()
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form}/>
    </div>
  );
}
```
## Form.js
```
import React from 'react';

const Form = React.forwardRef( function Form(props, ref) {
const form = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current.reset();
      }
    };
  });
    
  return (
    <form ref={form}>
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
)
export default Form;
```
