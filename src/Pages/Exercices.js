import  React from 'react'
import exerciseList from '../Components/ExerciseList'
import Welcome from '../Components/Welcome'
import ExerciseList from '../Components/ExerciseList'
import Botton from '../Components/Bottom'
import '/Users/Ramce/fitness/Fitness/src/Components/styles/Card.css'
import Loading from '../Components/Loading'
import FaltalError from './500'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'


class Exercises extends React.Component {
        
    state = {
        data: [],
        loading: true,
        error: null
        
        }
    async componentDidMount(){
        await this.fetchExercises()
    }   

    fetchExercises = async () => {
       try{
            let res = await fetch('http://localhost:8080/api/exercises')
            let data = await res.json()
        
            this.setState({
                data, 
                loading: false
            })    
         } catch (error){
            this.setState({
                loading: false,
                error
            })
            }
    }


    render() {
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError/>
        return(
                <React.Fragment>
                    <Welcome
                        username="Ram"
                    />
                    <ExerciseList
                        Exercises={this.state.data}
                    />
                    <Botton
                    />
                    </React.Fragment>  
        )
    }
}

export default Exercises