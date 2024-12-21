import React, { useState } from 'react';
import "./Task.css"

const Calculator = () => {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    if (value === 'CE') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString()); // Note: eval should be used cautiously in real-world applications.
      } catch (e) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          className="input"
          type="text"
          value={input}
          placeholder="0"
          readOnly
        />
        <div className="row">
          <Button label="CE" onClick={() => handlePress('CE')} />
          <Button label="+/-" onClick={() => handlePress('-')} />
          <Button label="%" onClick={() => handlePress('/100')} />
          <Button label="/" onClick={() => handlePress('/')} />
        </div>
        <div className="row">
          <Button label="1" onClick={() => handlePress('1')} />
          <Button label="2" onClick={() => handlePress('2')} />
          <Button label="3" onClick={() => handlePress('3')} />
          <Button label="*" onClick={() => handlePress('*')} />
        </div>
        <div className="row">
          <Button label="4" onClick={() => handlePress('4')} />
          <Button label="5" onClick={() => handlePress('5')} />
          <Button label="6" onClick={() => handlePress('6')} />
          <Button label="-" onClick={() => handlePress('-')} />
        </div>
        <div className="row">
          <Button label="7" onClick={() => handlePress('7')} />
          <Button label="8" onClick={() => handlePress('8')} />
          <Button label="9" onClick={() => handlePress('9')} />
          <Button label="+" onClick={() => handlePress('+')} />
        </div>
        <div className="row">
          <Button label="0" onClick={() => handlePress('0')} />
          <Button label="." onClick={() => handlePress('.')} />
          <Button label="DEL" onClick={() => handlePress('DEL')} />
          <Button label="=" onClick={() => handlePress('=')} />
        </div>
      </div>
    </div>
  );
};

const Button = ({ label, onClick }) => (
  <button className="button" onClick={onClick}>
    {label}
  </button>
);

export default Calculator;