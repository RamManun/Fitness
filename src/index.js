//const element = document.createElement('h1')

//element.innerText = 'Hola React'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Exercisesp from './Pages/Exercices'
import App from './Components/App'
import './Components/styles/Card.css'
const container = document.getElementById('root')

ReactDOM.render(<body className="BodyColor"> <App /> </body>,container)