import React from 'react'
import exerciseImg from '../Imagenes/exercise.png'
import circlesImg from '../Imagenes/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

class Card extends React.Component {

    render(){
        const { title, description, img} = this.props
        return(
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}),linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
                }}
                >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-rigth"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>         
        )
    }


}

export default Card