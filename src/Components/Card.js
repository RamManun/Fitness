import React from 'react'
import exerciseImg from '../Imagenes/exercise.png'
import circleImg from '../Imagenes/circles.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'

class Card extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            image: 'https://i7.pngguru.com/preview/984/841/215/bulbasaur.jpg'
        }
    }

    componentDidMount(){
        setTimeout(() => {
                this.setState({
                image: 'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c319.png'
                })
            }, 5000)
    }
    render(){
        const { title, description, img, leftColor, righColor} = this.props
        return(
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circleImg}), linear-grandient(to right, ${leftColor}, ${righColor}`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-rigth"/>
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