import React, { ChangeEvent, useState } from 'react';
import Checkbox from './components/Checkbox/Checkbox';

function App() {
  const [state, setState] = useState(false);

  const handleChange = (e: ChangeEvent) => {
    console.log(e);
    setState(s => !s);
  };

  return (
    <div className="page">
      <div className="page__header">
        <h1>React checkbox list</h1>
      </div>
      <div className="page__body">
        <p className="intro">
          Simple React linked checkbox list. Supports controlled and
          uncontrolled operation and is is designed to be easily copied into
          your project or design system.
        </p>
        <Checkbox
          id="checkbox_1"
          checked={state}
          indeterminate
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
