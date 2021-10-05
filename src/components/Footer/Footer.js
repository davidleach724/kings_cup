import glasses from '../../images/glasses.png'
import istillparty from '../../images/istillparty.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footerimg" src={istillparty} />
      <img className="footerimg" src={glasses} />
    </div>
  )
}

export default Footer