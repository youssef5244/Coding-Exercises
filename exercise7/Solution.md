```
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

function App() {
    function Update(){
          user.email="new"
          user.password="fss"
          user.loggedIn= true
      }
      
//    function Test(){
//          console.log("hi");
//      }  
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>
      
      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>
      <p id="actions">
        <button onClick={Update}>Login</button>
      </p>
      
    </div>
  );
}

export default App;
```
