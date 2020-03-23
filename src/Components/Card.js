import React from 'react'
import exerciseImg from '../Imagenes/exercise.png'
import circlesImg from '../Imagenes/circles.png'
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
                image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
                })
            }, 5000)
    }
    render(){
        const { title, description, img} = this.props
        return(
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-grandient (to right, ${this.props.LeftColor}, ${this.props.RightColor})`
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