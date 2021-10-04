import { useEffect, useState } from 'react'
import CurrentCard from '../CurrentCard/CurrentCard'
import { cardData } from '../../data/cardData'
import { Link } from 'react-router-dom'
import './Game.css'

const Game = () => {
  const [cardOrder, setCardOrder] = useState()
  const [position, setPosition] = useState(0)

  useEffect(() => {
    generateCardOrder()
  }, [])

  const generateCardOrder = () => {
    let orderList = []
    let cardList = []
    while (orderList.length !== 52) {
      let num = Math.floor(Math.random() * 52);
      if (!orderList.includes(num)) {
        orderList.push(num)
      }
    }

    orderList.forEach(num => {
      cardList.push(cardData[num])
    })

    setCardOrder(cardList);
  }


  return (
    <section className="game-container" onClick={() => setPosition(position+1)} >
      <h1 className="game-title">Kings Cup</h1>
      {cardOrder && position < 52 && <CurrentCard card={cardOrder[position]}/>}
      {position > 51 && 
        <Link to="/">
          <button>Play Again</button>
        </Link>}
    </section>
  )
}

export default Game