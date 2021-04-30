import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './utils/historyHandler';
import Content from './components/Content';

// Get type definitions on Window object for Segment event tracking
declare global {
 
}

function App() {
  return(
    <React.Fragment>
      <Router history={history}>
            <Content />
      </Router>
    </React.Fragment>
  )
}

export default App;