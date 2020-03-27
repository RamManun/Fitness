import React from 'react'
import Welcome from '../Components/Welcome'
import ExerciseList from '../Components/ExerciseList'
import Botton from '../Components/Bottom'
import '/Users/Ramce/fitness/Fitness/src/Components/styles/Card.css'
import Loading from '../Components/Loading'
import FatalError from './500'
import UseFetch from '../hooks/useFetch'

const Exercises = () => {
    
    const{data, loading, error} = UseFetch('http://localhost:8080/api/exercises')

    if(loading)
            return <Loading/>
        if(error)
            return <FatalError/>
        return(
                <React.Fragment>
                    <Welcome
                        username="Ram"
                    />
                    <ExerciseList
                        Exercises={data}
                    />
                    <Botton
                    />
                    </React.Fragment>  
        )

}

export default Exercises
