import React, { useState, useCallback } from 'react';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
