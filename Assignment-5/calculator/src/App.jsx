import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState('');
  const [value1, setValue1] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (value) => {
    setDisplay(display + value);
  };

  const handleOperatorClick = (op) => {
    if (display !== '') {
      setValue1(parseFloat(display));
      setOperator(op);
      setDisplay(display + ' ' + op + ' ');
    }
  };

  const handleEqualsClick = () => {
    if (value1 !== null && operator) {
      const parts = display.split(` ${operator} `);
      const value2 = parseFloat(parts[1]);

      let res;
      switch (operator) {
        case '+':
          res = value1 + value2;
          break;
        case '-':
          res = value1 - value2;
          break;
        case '*':
          res = value1 * value2;
          break;
        case '/':
          res = value1 / value2;
          break;
        default:
          return;
      }

      setDisplay(res.toString());
      setValue1(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplay('');
    setOperator(null);
    setValue1(null);
  };

  return (
    <div className="container">
      <div className="display">{display || 0}</div>
      <div className="btns">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num.toString())}>{num}</button>
        ))}
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => handleOperatorClick(op)}>{op}</button>
        ))}
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
}

export default App;
