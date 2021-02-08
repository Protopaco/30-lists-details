import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ListPage from '../../containers/ListPage/ListPage.jsx';
import CharacterDetail from '../CharacterDetail/CharacterDetail.jsx';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          component={ListPage}
        />
        <Route exact path="/details/:id"
          component={CharacterDetail}
        />
      </Switch>

    </Router>

  );
}
