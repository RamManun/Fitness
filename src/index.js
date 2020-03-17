//const element = document.createElement('h1')

//element.innerText = 'Hola React'

//const container = document.getElementById('root')

//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firsName: 'Ram',
    LastName: 'Manun'
}

function getName(user){
    return `${user.firsName} ${user.LastName}`
}

function getGreeting(user){
    if(user){
       return <h1>Hello {getName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}

const name = 'Ram'

const element = <div> {getGreeting(user)}</div>
const container = document.getElementById('root')

ReactDOM.render(element, container)