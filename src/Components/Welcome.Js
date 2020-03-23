import React from 'react'
import "./styles/Welcome.css"

function Welcome(props){
    return(
        <div ClassName="container">
            <div ClassName="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>Vamos a comenzar</p>
            </div>
        </div>
    )
}

export default Welcome 