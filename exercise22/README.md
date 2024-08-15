## Managing Other Values with Refs
```
Your working on a "Workout" app and your task is to start and stop timers when users click the "Start" and "Stop" buttons
of a selected workout.
You're provided with some code that already displays some workout items, therefore, you don't need to work on the JSX code
or manage any state.
Instead, your task is to set a timer if the "Start" button is clicked and clear (stop) that timer once the "Stop" button is clicked.
If a timer expires, the same code that should execute if it's stopped manually (by pressing the "Stop" button) should be executed.
The timer expiration time should be different for every workout - take a closer look at the Workout component to get access to
that workout-specific time.
You also must make sure that different Workout component instances set and manage separate, independent timers (i.e., when 
starting timers for "Pushups" and "Squats", clicking "Stop" for "Squats" should not stop the "Pushups" timer etc).
When a timer expires, the same function that's triggered when the "Stop" button is pressed should be executed.
Important: In this Udemy exercise environment, React Hooks can't be imported directly. Instead, you have to
import React from 'react' and then call Hooks on that React object (e.g., React.useState()).
```
## Original Code
```
export default function Workout({ title, description, time, onComplete }) {
  function handleStartWorkout() {
    // Todo: Start timer
  }

  function handleStopWorkout() {
    // Todo: Stop timer
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
```
