import React from 'react'
import '../App.css'

const SquareComponent = (props) => {

    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <span
            className={props.state === "X" ? `${classes} blue` : `${classes} white`}
            onClick={() => props.onclick(props.index)}
        >
            {props.state}
        </span>
    )
}

export default SquareComponent
