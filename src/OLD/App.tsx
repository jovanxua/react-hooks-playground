import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  HooksBasic,
  HooksObjects,
} from './example-components';

const expirementList = [
  HooksBasic,
  HooksObjects,
];

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 200px;
`;

const OutputContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SourceCodeContainer = styled.div`
  display: flex;
  flex: 0;
`;

const Option = styled.button`
  margin: 0 30px 30px 30px;
  padding: 15px;
`;

function App() {
  // Declare a new state variable, which we'll call "count"
  const [currentExample, setCurrentExample] = useState(expirementList[0]);
  const ActiveComponent = currentExample.component;

  return (
    <Container>
      <OptionsContainer>
        {expirementList.map(exp => (
          <Option onClick={() => setCurrentExample(exp)}>
            { exp.label }
          </Option>
        ))}
      </OptionsContainer>
      <OutputContainer>
        <ActiveComponent />
      </OutputContainer>
      <SourceCodeContainer/>
    </Container>
  );
}

export default App;
