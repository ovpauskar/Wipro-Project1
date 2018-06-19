import React, { Component } from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import "semantic-ui-css/semantic.min.css";
//App Layouts
import Social from './components/social/'


//Import css for the application
import './index.css'
import { Dashboard } from './components/appComponent/dashboard';

class App extends Component {
  render() {
    return <Router history={browserHistory}>
            <Route path="/"> <IndexRoute component={Social} /></Route>
            <Route exact path="/dashboard" component={Dashboard} />
      </Router>;
  }
}

export default App;