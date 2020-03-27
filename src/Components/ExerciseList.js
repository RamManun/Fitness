import React, { Component } from 'react'
import Exercises from '../Pages/Exercices'
import { render } from '@testing-library/react'
import Card from './Card'

const ExerciseList = ({Exercises}) => (
    <React.Fragment>
        {Exercises.map((Exercises)=>(
            <Card
                key={Exercises.id}
                title={Exercises.title}
                description={Exercises.description}
                img={Exercises.img}
                leftColor={Exercises.leftColor}
                rightColor={Exercises.rightColor}
            />     
        ))}
    </React.Fragment>
)

export default ExerciseList