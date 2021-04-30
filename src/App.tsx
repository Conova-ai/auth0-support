import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './utils/historyHandler';
import Content from './components/Content';

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
