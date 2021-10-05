import glasses from '../../images/glasses.png'
import istillparty from '../../images/istillparty.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footerimg" alt="istill.party" src={istillparty} />
      <img className="footerimg" alt="glasses logo" src={glasses} />
    </div>
  )
}

export default Footer