import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { ThemeProvider } from 'emotion-theming'
import Home from './Portfolio'
import 'common/fontAwesomeLib'
import './utils/globalStyles'

const theme = {
  primaryColor: '#ff4d5a',
  secondaryColor: '#072142',
  whiteColor: '#fff',
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ThemeProvider>
)

export default App
