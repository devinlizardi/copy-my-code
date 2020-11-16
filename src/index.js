import React from 'react';
import './index.css';
import CopyCode from './CopyCode';

function App(props) {
  return (
    <CopyCode
      title={props.title}
      >
      {props.children}
      </CopyCode>
  );
}

export default App;