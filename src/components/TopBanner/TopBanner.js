import banner from '../../images/banner.png'
import './TopBanner.css'

const TopBanner = ({position}) => {

  return (
    <div className="header-container">
      <img className="game-banner" alt="banner" src={banner} />
      <h1 className="cards-left" >{51-position}</h1>
    </div>
  )
}

export default TopBanner