import React, { useState , useEffect} from 'react';
import './App.css';
import BoxData from './util/BoxData'
import Box from './components/Box'
import WinCondition from './util/WinCondition'

function App() {
  const boxData = BoxData()
  const winCondition = WinCondition
  const [action, setAction] = useState(boxData)
  const [turn, setTurn] = useState(0)

    const winRound = (action) => {
      winCondition.forEach(element => {
        if (action[element[0]].value == action[element[1]].value && action[element[1]].value == action[element[2]].value && action[element[0]].value == "x") {
          console.log("player x won")
        } else if (action[element[0]].value == action[element[1]].value && action[element[1]].value == action[element[2]].value && action[element[0]].value == "o") {
          console.log("player o won")
        }
      })
    }
    const handleClick = id => {
      const transformedArr = action.map(x=> {
        if (x.id == id) {
          if (turn % 2 == 0 ) {
            return {id:x.id, value:'x'}
          } else {
            return {id:x.id, value:'o'}
          }
        } else {
          return x
        }
      })
      setTurn(turn => turn+1)
      setAction(transformedArr)
    }
useEffect(() => {
  winRound(action)
})

const board = action.map(box => <Box key={box.id} id={box.id} box={box} handleClick={handleClick}/> )
return (
  
    <div style={{
        margin: "auto 32vw auto 32vw"
    }}>
      {board}
    </div>
  )
}

export default App;

//forEach, filter, map, reduce
//arr = [1,2,3,4]