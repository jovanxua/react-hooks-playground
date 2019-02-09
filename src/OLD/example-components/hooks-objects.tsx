import React, { useState } from 'react';

interface IPerson {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
}

const rizal: IPerson = {
  id: 1,
  firstName: 'Jose',
  lastName: 'Rizal',
  age: 16,
};

const magellan: IPerson = {
  id: 2,
  firstName: 'Ferdinand',
  lastName: 'Magellan',
  age: 233,
};

function Hooks() {
  const [person, setPerson] = useState(rizal);

  return (
    <div>
      <p>{`Hi my name is ${person.firstName} ${person.lastName}, ${person.age} years old.`}</p>
      <button onClick={() => setPerson(person.id === rizal.id ? magellan : rizal)}>
        Change Name
      </button>
    </div>
  );
}

export default {
  id: 'hooks-objects',
  component: Hooks,
  label: 'Hooks Objects'
};
