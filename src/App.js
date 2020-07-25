import React, { useState , useEffect} from 'react';
import './App.css';
import BoxData from './util/BoxData'
import Box from './components/Box'
import WinCondition from './util/WinCondition'
import { findByLabelText } from '@testing-library/react';

function App() {
  const boxData = BoxData()
  const winCondition = WinCondition
  const [action, setAction] = useState(boxData)
  const [turn, setTurn] = useState(0)
  const [textMessage, setTextMessage] = useState("")

    const winRound = (action) => {
      winCondition.forEach(element => {
        if (action[element[0]].value == action[element[1]].value && action[element[1]].value == action[element[2]].value && action[element[0]].value == "x") {
          return setTextMessage("Player x has won!")
        } else if (action[element[0]].value == action[element[1]].value && action[element[1]].value == action[element[2]].value && action[element[0]].value == "o") {
          return setTextMessage("Player o has won!")
        }
      })
    }
    const handleClick = id => {
      const transformedArr = action.map(x=> {
        if (x.id == id) {
          if (x.value == "x" || x.value == "o") {
            setTextMessage("This space is already taken!")
            setTurn(turn => turn-1)
            return x
          } else {
            if (turn % 2 == 0 ) {
              return {id:x.id, value:'x'}
            } else {
              return {id:x.id, value:'o'}
            }
          }
        } else {
          return x
        }
      })
      setTurn(turn => turn+1)
      setAction(transformedArr)
      if (turn >= 8) {
        return setTextMessage("Draw!")
      }
      if (textMessage) {
        return setTextMessage("")
      }
    }
useEffect(() => {
  winRound(action)
})

const board = action.map(box => ([<Box key={box.id} id={box.id} box={box} handleClick={handleClick}/>, <p className="breaker"></p>]) )
return (
  <div>
    <h1 style={{
          textAlign: "center",
          background: "lightblue",
          margin: "0 0 0 0",
          padding: "1vw 0 1vw 0"
      }}>TIC TAC TOE</h1>
    <div className= "container">
      {board}
    </div>
    <h3 style={{
          textAlign: "center",
          background: "lightskyblue",
          margin: "0 0 0 0",
          padding: "1vw 0 1vw 0",
          height: "10vw"
    }}>{textMessage ? textMessage : null }</h3>
  </div>
  )
}

export default App;

//forEach, filter, map, reduce
//arr = [1,2,3,4]