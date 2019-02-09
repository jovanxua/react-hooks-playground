import React, { useState, Component } from 'react';

const initialValue: number = 0

function Hooks() {
  const [count, setCount] = useState(0);

  return (<div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default {
  id: 'hooks-basic',
  component: Hooks,
  label: 'Hooks Basic'
};
