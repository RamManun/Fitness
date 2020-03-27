import React, { Component } from 'react'
import Exercises from '../Pages/Exercices'
import { render } from '@testing-library/react'
import Card from './Card'

const ExerciseList = ({Exercises}) => (
    <React.Fragment>
        {Exercises.map((Exercises)=>(
            <Card
                key={Exercises.id}
                {...Exercises}
            />     
        ))}
    </React.Fragment>
)

export default ExerciseList