import { useEffect, useState } from 'react'
import './Game.css'

const Game = () => {
  const [cardOrder, setCardOrder] = useState([])
  const [currentCard, setCurrentCard] = useState({})

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

  return (
    <section>
      <h1>This is the game</h1>
      <button>DRAW</button>
    </section>
  )
}

export default Game