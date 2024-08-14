## Accessing DOM Elements with "refs"
```
Your given a code snippet that's part of a bigger app that deals with user image uploads.
Since the native, built-in <input type="file"> element is hard to style and doesn't fit the intended app style,
it's hidden via display: none in the provided index.css file.
Therefore, to make the file picker work without being displayed, your task is to ensure that the click event on 
the <input type="file"> element is triggered whenever the <button>Pick Image</button> is clicked.
This can be achieved by calling the built-in click() method on the underlying input element.
You should use React's "ref" feature to get hold of the <input type="file"> element and execute that click() 
method on it whenever the <button> is clicked.
Important: In this Udemy exercise environment, React hooks must be used directly on the imported React object 
(import React from 'react'). For example, useState (which you don't need for this task) would then be called
like this: React.useState().
```
## Original Code
```
function App() {
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" />
        <button>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
```
