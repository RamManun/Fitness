//const element = document.createElement('h1')

//element.innerText = 'Hola React'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Components/Card'

const container = document.getElementById('root')

ReactDOM.render(<Card
                    title="Mi primera practica"
                    description="Hola React llego tu papa"
                    img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                    letfColor="#A74CF2"
                    righColor="#617BFB"
                />, container)