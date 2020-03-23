import React, { Component } from 'react'
import Exercises from '../Pages/Exercices'
import { render } from '@testing-library/react'
import Card from './Card'

function ExerciseList(props){
    return(
        <div>
            {props.Exercises.map((Exercises)=>{
        return(
        <Card
         title={Exercises.title}
         description={Exercises.description}
         img={Exercises.img}
         leftColor={Exercises.leftColor}
         rightColor={Exercises.rightColor}
                     />
                 )
          })}
        </div>

    )

    

}

export default ExerciseList