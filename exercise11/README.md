## Dynamic Styling
```
Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.
The class should be applied when the <button> is clicked for the first time.
Important: Use React.useState() instead of just useState() as the latter can cause problems in this Udemy code
environment.
```
## Original Code:
```
import React from 'react';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <p>Style me!</p>
            <button>Toggle style</button>
        </div>
    );
}
```
