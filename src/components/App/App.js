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
          <Route path='/game' component={ Game } />
          <Route path='/rules' component={ Rules } />
          <Route component={ Home } />
        </Switch>
    </main>
  )
}

export default App