import React from "react"
import{connect} from "react-redux"
import { getInitialTemperature } from "../actions/temp"
import WeatherCard from "./WeatherCard"


 
  class App extends React.Component{
    componentDidMount(){
      console.log("ccmmmd");
      const str="delhi"
        this.props.dispatch(getInitialTemperature(str));
    }

    render(){
      return (
        <>
        <WeatherCard/>
        </>
      );
    
    }
  }



  function mapStateToProps(state){
    return{
        boom:state.temperature,

    }
}
export default connect(mapStateToProps)(App);
