import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemeComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeComponent />
    </ThemeContext.Provider>
  );
}
export default App;
