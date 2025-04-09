import React, { useState } from 'react';
import './App.css'; // Optional: style your calculator

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Safe expression evaluation using Function constructor
      // Only allows simple math expressions
      // Avoids use of eval()
      // eslint-disable-next-line no-new-func
      const output = Function('"use strict";return (' + input + ')')();
      setResult(output);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={backspace}>←</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button className="equal" onClick={calculate}>=</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
}

export default App;
