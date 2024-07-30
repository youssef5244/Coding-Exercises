```
import React from 'react';

export default function App() {
    const [selectedButton,setSelectedButton]=React.useState();
    
    function HandleClick(selectedButton){
        setSelectedButton(selectedButton);
    }
    let firstDiv=<div>
        <button onClick={() => HandleClick('jsx')}>Delete</button>
        {selectedButton}
      </div> ;
      
      if(selectedButton){
          firstDiv=(
       <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={() => setSelectedButton()}>Proceed</button>
       </div>       
              )
      }
    return (
        firstDiv
    );
}
...
