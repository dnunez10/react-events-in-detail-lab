// Code DelayedButton Component Here
import React from 'react'

export default function DelayedButton(props) {
    return (
        <div>
        <button onClick = {(e) => setTimeout(() => {
            e.persist()
            props.onDelayedClick(e)
        }, props.delay)}>Y</button>
        </div>
    )
}