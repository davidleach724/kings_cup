import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {

  return (
    <section className="home-menu">
      <Link to="/game">
        <button>New Game</button>
      </Link>
      <Link to="/rules">
        <button>Rules</button>
      </Link>
    </section>
  )
}

export default Home