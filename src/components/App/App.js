import React from 'react'
import { Route, Switch } from 'react-router'
import Game from '../Game/Game'
import Home from '../Home/Home'
import Rules from '../Rules/Rules'
import './App.css'

const App = () => {

  return ( 
    <main>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/game' component={ Game } />
          <Route exact path='/rules' component={ Rules } />
        </Switch>
    </main>
  )
}

export default App