import React from 'react';
import './App.css';
import { Dropdown } from 'components';

function App() {
  return (
    <div style={{ padding: 24, background: 'teal' }}>
      <Dropdown>
        <Dropdown.Toggle>
          Welcome <strong>Suraj</strong>
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
}

export default App;
