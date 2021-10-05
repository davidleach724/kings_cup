import newGame from '../../images/new_game.png'
import rules from '../../images/rules.png'
import banner from '../../images/banner.png'

import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {

  return (
    <section className="home-menu">
      <h1 className="game-title">Kings Cup</h1>
      <Link to="/game">
        <img className="menu-btn" src={newGame} />
      </Link>
      <Link to="/rules">
        <img className="menu-btn" src={rules} />
      </Link>
    </section>
  )
}

export default Home