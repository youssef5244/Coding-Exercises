## Working with Portals

A colleague asked you to finish work on a Toast component they worked on.
That component should output a short info message upon certain page events - e.g., once a user successfully enrolled into a course.
To optimize the final DOM structure, the rendered content of the Toast component should be injected directly into the <body> element
(which could be selected via document.querySelector('body')). It should NOT be rendered in the place where the <Toast /> component 
is used in the JSX code!
For this task, the edited Toast component should then be displayed conditionally once a user clicked the Enrol button in the App
component.
After 3 seconds (set via setTimeout), the Toast component should be removed from the page again.

Important: In this Udemy exercise workspace, any React Hooks (and other React functions) must be accessed directly on the imported 
React object (import React from 'react') - for example: React.useState().
The same is true for any functions that are part of the react-dom library - you must instead import ReactDOM from 'react-dom' and
then call any functions on that ReactDOM object (ReactDOM.someFunction()).
