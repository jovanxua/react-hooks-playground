import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import NumericKeypad from './components/numeric-keypad';

const initialOutput = '0';
const maxLength = 57;
const keyMatrix = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', 'x'],
  ['1', '2', '3', '+'],
  ['.', '0', '=','-']
];

function App() {
  const [currentExample, setCurrentExample] = useState(0);
  const handleInput = () => {
    return null;
  }

  return (
    <CalculatorContainer>
      <Global styles={globalStyles} />
      <HistoryContainer>
        
      </HistoryContainer>
      <OutputContainer>
        <OutputValue>Hi</OutputValue>
      </OutputContainer>
      <NumericKeypad keyMatrix={keyMatrix} onKeyPress={handleInput} />
    </CalculatorContainer>
  );
}

const CalculatorContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  max-width: 350px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
  background: #2c3e50;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
`;

const HistoryContainer = styled.div`
  display: flex;
  flex: 0.35;
  background: red;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const OutputContainer = styled.div`
  display: flex;
  flex: 0.2;
  background: orange;
  max-height: 150px;
  align-items: center;
  justify-content: flex-end;
`;

const OutputValue = styled.p`
  padding: 30px;
`;

const globalStyles = css`
  html,
  body {
    margin: 20px;
    padding: 0;
    background: #e74c3c;
  }
`;

export default App;
