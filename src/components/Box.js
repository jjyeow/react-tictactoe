import React from 'react'

function Box(props) {
    return (

            <div 
            className="boxes"
            onClick={() => props.handleClick(props.id)}>
                {props.box.value}
                
            </div>
            
        
    )
}

export default Box