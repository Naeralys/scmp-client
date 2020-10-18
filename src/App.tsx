import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Customers from './views/Customers'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route>
            <Customers />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
