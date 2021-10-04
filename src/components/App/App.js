import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../Home/Home'
import './App.css'

const App = () => {

  return ( 
    <main>
      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>
    </main>
  )
}

export default App