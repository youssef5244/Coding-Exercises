```
import React from 'react';

export default function App() {
    const[isSelected, setIsSelected]=React.useState(false);
    return (
        <div>
            <p className={isSelected ? 'active' : undefined}>Style me!</p>
            <button onClick={()=>setIsSelected(true)}>Toggle style</button>
        </div>
    );
}
```
