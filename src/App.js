import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxData from './util/BoxData'
import Box from './components/Box'

function App() {
  const boxData = BoxData()
  const [action, setAction] = useState(boxData)

  // const handleClick = id => {
  //   action.map(x => {
  //     if (x.id == id) {
  //       setAction([{...x, value: 'x'}])
  //       }
  //     })
  //     console.log(action)
  //   }
    // const updatedAction = action.map(x => {
    //   if (x.id === id) {
    //     return {
    //       ...x,
    //       value: "x"
    //     }
    //   }
    // })
    // console.log(updatedAction)
    // return setAction(updatedAction)

    const handleClick = id => {
      const transformedArr = action.map(x=> {
        if (x.id == id) {
          return {id:x.id, value:'x'}
        } else {
          return x
        }

      })
      setAction(transformedArr)
    }

return (
  
    <div style={{
        margin: "auto 32vw auto 32vw"
    }}>
      {action.map(box => (
        <Box key={box.id} id={box.id} box={box} handleClick={handleClick}/>
      ))}
    </div>
  )
}

export default App;

//forEach, filter, map, reduce
//arr = [1,2,3,4]