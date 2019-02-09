import React, { memo } from 'react';
import styled from '@emotion/styled';

interface NumericKeypadProps {
  onKeyPress(value: string): void;
  keyMatrix: string[][];
}

function NumericKeypad(props: NumericKeypadProps) {
  const { keyMatrix, onKeyPress } = props;

  return (
    <NumericKeypadContainer>
      {keyMatrix.map((row, rowIndex: number) => (
        <Row key={rowIndex}>
          {row.map((col,colIndex) => (
            <Button key={colIndex} onClick={() => onKeyPress(col)}>
              {col}
            </Button>
          ))}
        </Row>
      ))}
    </NumericKeypadContainer>
  );
};

const NumericKeypadContainer = styled.div`
  display: flex;
  flex: 0.45;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
`;

const Button = styled.button`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid #364d63;
  background: transparent;
`;

export default memo(NumericKeypad);
