import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Desktop1 from './Desktop1';
import Desktop2 from './Desktop2';
import Desktop3 from './Desktop3';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Desktop1} />
          <Route path="/Desktop2" component={Desktop2} />
          <Route path="/Desktop3" component={Desktop3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
