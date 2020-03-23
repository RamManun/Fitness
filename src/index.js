//const element = document.createElement('h1')

//element.innerText = 'Hola React'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Exercices from './Pages/Exercices'
import 'bootstrap/dist/css/bootstrap.css'
import Exercisesp from './Pages/Exercices'

const container = document.getElementById('root')

ReactDOM.render(<Exercices/> ,container)