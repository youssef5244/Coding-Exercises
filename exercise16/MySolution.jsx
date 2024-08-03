import React from 'react';
import Review from './Review';
// don't change the Component name "App"
function App() {
    
const[ffeedback, setFeedback]=React.useState('');
const[name, setName]=React.useState('');

function handleChange(event){
    setFeedback(event.target.value);
}

function handleChange2(event){
    setName(event.target.value);
}

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={ffeedback} onChange={handleChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={name} onChange={handleChange2} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={ffeedback} student={name}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
