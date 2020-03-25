import React from 'react'
import './styles/Card.css'
import Add from '../Imagenes/add.png'
import { render } from '@testing-library/react'
import {Link} from 'react-router-dom'


const botton = () => (
        <Link to="/exercise/new">
                        <img src={Add} className="Fitness-Add"/>
                </Link>
                )
       
export default botton