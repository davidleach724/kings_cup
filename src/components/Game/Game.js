import { useEffect, useState } from 'react'
import CurrentCard from '../CurrentCard/CurrentCard'
import './Game.css'

const Game = () => {
  const [cardOrder, setCardOrder] = useState([])
  const [currentCard, setCurrentCard] = useState()
  const [position, setPosition] = useState(0)

  useEffect(() => {
    setCardOrder(generateCardOrder())
  }, [])

  const generateCardOrder = () => {
    let orderList = []
    while (orderList.length != 50) {
      let num = Math.floor(Math.random() * 50);
      if (!orderList.includes(num)) {
        orderList.push(num)
      }
    }
    return orderList;
  }

  const generateCurrentCard = () => {
    setPosition(position+1)
    setCurrentCard(cardOrder[position])
  }

  return (
    <section>
      <h1>This is the game</h1>
      {currentCard != null && <CurrentCard card={currentCard}/>}
      <button onClick={() => generateCurrentCard()}>DRAW</button>
    </section>
  )
}

export default Game