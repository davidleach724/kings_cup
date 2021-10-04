import { useEffect, useState } from 'react'
import CurrentCard from '../CurrentCard/CurrentCard'
import { cardData } from '../../data/cardData'
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
    while (orderList.length != 2) {
      let num = Math.floor(Math.random() * 2);
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
    <section>
      <h1>This is the game</h1>
      {cardOrder && <CurrentCard card={cardOrder[position]}/>}
      <button onClick={() => setPosition(position+1)}>DRAW</button>
    </section>
  )
}

export default Game