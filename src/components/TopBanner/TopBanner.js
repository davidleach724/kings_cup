import banner from '../../images/banner.png'
import './TopBanner.css'

const TopBanner = () => {
  return (
    <div className="header-container">
      <img className="game-banner" src={banner} />
    </div>
  )
}

export default TopBanner