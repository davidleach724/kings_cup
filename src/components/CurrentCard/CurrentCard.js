import './CurrentCard.css'

const CurrentCard = ({card}) => {
  return (
    <div className="card-container">
      <img
            className="card-image"
            src={
              process.env.PUBLIC_URL +
              "/project-images/" +
              card.name +
              ".png"
            }
            alt={card.name}
          />
      <p className="card-rule">{card.rule}</p>
    </div>
  )
}

export default CurrentCard