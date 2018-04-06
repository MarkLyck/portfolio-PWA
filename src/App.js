import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import Home from './Home'
import './globalStyles'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
