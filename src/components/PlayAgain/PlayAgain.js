import banner from '../../images/banner.png'
import playAgain from '../../images/play_again.png'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './PlayAgain.css'

const PlayAgain = () => {
  return (
    <section className="home-menu">
      <img className="home-banner" alt="banner" src={banner} />
      <div className="menu-btns">
      <Link to="/">
        <img className="play-again-btn" alt="play again btn" src={playAgain} />
      </Link>
      </div>
      <Footer />
    </section>
  )
}

export default PlayAgain