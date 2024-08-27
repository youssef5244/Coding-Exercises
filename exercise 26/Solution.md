## App.js
```
import Page from './Page';
import ThemeContextProvider from './ThemeContextProvider';
 
function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}
 
export default App;
```
## Paje.js
```
import React from 'react';
 
import Header from './Header';
import { ThemeContext } from './ThemeContextProvider';
 
export default function Page() {
  const themeCtx = React.useContext(ThemeContext);
 
  return (
    <div id="app" className={themeCtx.theme}>
      <Header />
 
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
```
## ThemeContextProvider.js
```
import React from 'react';
 
export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
 
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
 
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```
## Header.js
```
import React from 'react';
 
import { ThemeContext } from './ThemeContextProvider';
 
export default function Header() {
  const themeCtx = React.useContext(ThemeContext);
 
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={themeCtx.toggleTheme}>Toggle Theme</button>
    </header>
  );
}
```
