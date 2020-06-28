import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './Home'
import AboutUs from './AboutUs';

class App extends React.Component {
 

  render () {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutUs} />
        </div>
      </Router>
    )
  }
}


export default App