import React from 'react'
import BoxData from '../util/BoxData'

function Box(props) {
    return (
            <div 
                style={{
                display: "inline-block",
                width: "10vw",
                height: "10vw",
                lineHeight: "10vw",
                justifyContent: "center",
                textAlign: "center",
                border: "solid 3px black"    
            }}
            onClick={() => props.handleClick(props.id)}>
                {props.box.value}
            </div>

    )
}

export default Box