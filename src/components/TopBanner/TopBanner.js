import { Link } from 'react-router-dom'
import banner from '../../images/banner.png'
import './TopBanner.css'

const TopBanner = ({position}) => {

  return (
    <div className="header-container">
      <Link to="/">
        <img className="game-banner" alt="banner" src={banner} />
      </Link>
      <h1 className="cards-left" >{51-position}</h1>
    </div>
  )
}

export default TopBanner