import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MHGUIDE from './views/mh-guide'
import DIET from './views/diet'
import SOCGUIDE from './views/soc-guide'
import HOME from './views/home'
import PHGUIDE from './views/ph-guide'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MHGUIDE} exact path="/mh-guide" />
        <Route component={DIET} exact path="/diet" />
        <Route component={SOCGUIDE} exact path="/soc-guide" />
        <Route component={HOME} exact path="/home1" />
        <Route component={PHGUIDE} exact path="/ph-guide" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
