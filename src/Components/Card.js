import React from 'react'
import exerciseImg from '../Imagenes/exercise.png'
class Card extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <img src={exerciseImg}/>
                </div>
                <div>
                    <h1> Technique Guides</h1>
                    <p>esta es mi practica amiguitos</p>
                </div>
            </div>
        )
    }


}

export default Card