import newGame from '../../images/new_game.png'
import rules from '../../images/rules.png'
import banner from '../../images/banner.png'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'
import './Home.css'

const Home = () => {

  return (
    <section className="home-menu">
      {console.log('This page was created for fun by me, davidleach724@gmail.com')}
      <img className="home-banner" alt="banner" src={banner} />
      <div className="menu-btns">
      <Link to="/game">
        <img className="menu-btn" alt="new game btn" src={newGame} />
      </Link>
      <Link to="/rules">
        <img className="menu-btn" alt="rules btn" src={rules} />
      </Link>
      </div>
      <Footer />
    </section>
  )
}

export default Home