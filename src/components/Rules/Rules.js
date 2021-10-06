import { Link } from 'react-router-dom'
import banner from '../../images/banner.png'
import Footer from '../Footer/Footer'
import './Rules.css'

const Rules = () => {
  return (
    <div className="rules-container">
      <Link to='/'>
        <img className="rules-banner" alt="banner" src={ banner } />
      </Link>
        <h4>i drink responsibly... but istill.party</h4>
      <ul className="rules-list">
        <li>2 is for you (choose a person)</li>
        <li>3 is for me (you drink)</li>
        <li>4 is for ... women (women drink)</li>
        <li>5 is for never have i ever (one round, losers drink)</li>
        <li>6 is for ... men (men drink)</li>
        <li>7 is for heaven (last person pointing up drinks)</li>
        <li>8 is for a date (choose a partner & take a drink with them)</li>
        <li>9 is for rhymes (rhyme a word or phrase and whoever can't drinks)</li>
        <li>10 is forcategories (start a category, whoever can't list something drinks)</li>
        <li>jack is thumb master (place your thumb on the table, last one drinks)</li>
        <li>queen is question master (whoever answers your question drinks)</li>
        <li>king is make a rule (create a new rule, whoever breaks it drinks)</li>
        <li>ace is waterfall (everyone starts drinking and doesn't stop until the person before them stops)</li>
      <Footer />
      </ul>
    </div>
  )
}

export default Rules