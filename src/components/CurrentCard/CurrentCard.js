import TopBanner from '../TopBanner/TopBanner'
import './CurrentCard.css'

const CurrentCard = ({card, position}) => {
  return (
    <div className="card-container">
      <TopBanner position={position}/>
      <img
            className="card-image"
            src={
              process.env.PUBLIC_URL +
              "/project-images/" +
              card.name +
              ".png"
            }
            key={card.name}
            alt={card.name}
      />
      <p className="card-rule">{card.rule}</p>
    </div>
  )
}

export default CurrentCard