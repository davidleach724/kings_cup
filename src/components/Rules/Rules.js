import { Link } from 'react-router-dom'
import banner from '../../images/banner.png'
import './Rules.css'

const Rules = () => {
  return (
    <div className="rules-container">
      <Link to='/'>
        <img className="home-banner" alt="banner" src={ banner } />
      </Link>
      <div className="rules-list">
        <p>i drink responsibly... but istill.party</p>
        <p>2 is for you</p>
        <p>3 is for me</p>
        <p>4 is for women</p>
        <p>5 is never have i ever</p>
        <p>6 is for men</p>
        <p>7 is for heaven</p>
        <p>8 is for mates</p>
        <p>9 is for rhyme</p>
        <p>10 is categories</p>
        <p>jack is thumb master</p>
        <p>queen is question master</p>
        <p>king is make a rule</p>
        <p>ace is waterfall</p>
      </div>
    </div>
  )
}

export default Rules