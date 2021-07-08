import React from "react"
import{connect} from "react-redux"
 import{getTemperature} from"../actions/temp"
 import img1 from "../images/clouds.jpg"
class WeatherCrad extends React.Component{
    constructor(){
        super()
        this.state={
            SearchText:"",
            darkMode:false
        }
    }
   handleChange=(event)=>{
     
     this.setState({
         SearchText:event.target.value
     })
   }
   handlesearch=()=>{
    const{SearchText}=this.state
    this.props.dispatch(getTemperature(SearchText));

   }
   handleDarkMode=()=>{
       const{darkMode}=this.state
       console.log(darkMode)
       if(darkMode==false){
           this.setState({
               darkMode:true
           })
       }
       else {
        this.setState({
            darkMode:false
        })
        
       }
    
   }

    render(){
        console.log(this.props)
        const{boom}=this.props
        const{temp,showMovies}=boom
         console.log("hiiiiii",temp)
         console.log("byeeee",showMovies)

        let abc= new Date;
        abc=abc.toDateString();
        
        return(
            
            <>
            {temp&&   
             <div className={this.state.darkMode?"dark-main-div":"main-div"}>
            <div className="hell">
                <div className="mode">
                 <div className="mode1"><i className={this.state.darkMode?"fas fa-sun moon-color":"fas fa-sun sun-color"}></i></div>
                 <div className="mode1"><i className={this.state.darkMode?"fas fa-moon sun-color":"fas fa-moon moon-color"}></i></div>
                  
                   
                  
                   
                  
             
                 </div>
                   <div className={this.state.darkMode?"dark-button-box":"button-box"}>
                      <div className={this.state.darkMode?"dark-rounded-div":"rounded-div"} onClick={this.handleDarkMode}></div>
                  </div>
       
            </div>
                 
            <div heading-box> <h2 className={this.state.darkMode?"dark-heading-text":"heading-text"}>Welcome to weather App <i class="fas fa-cloud"></i></h2></div>
                <div className={this.state.darkMode?"dark-inner":"inner"}>
                   <div  className="search-box-div">           
                    <input className="input-box" onChange={this.handleChange} placeholder="type here to search"></input>
                   
                   <i className="fas fa-search search-icon" onClick={this.handlesearch} ></i>
                    </div>
                    {
                        !showMovies&&
                        <>
                         <h1 className="entry"><i className={this.state.darkMode?"fas fa-cloud-moon moon":"fas fa-cloud-moon dark-moon"}></i></h1>
                        <div className="entry-div">
                          <div><h1 className={this.state.darkMode?"entry-city":"dark-entry-city"}>{temp.main.temp}</h1></div>
                          <div className={this.state.darkMode?"entry-celcius":"dark-entry-celcius"}></div>
                          <div className={this.state.darkMode?"entry-city":"dark-entry-city"}><h1>C</h1></div>
                      </div>
                        <div><h1 className={this.state.darkMode?"main-city":"dark-main-city"}>{temp.name}</h1></div>
                        <div><p className={this.state.darkMode?"da":"dark-da"}>{abc}</p></div>
                         <div><p className={this.state.darkMode?"intro":"dark-intro"}>Developed by Arsh</p></div>
                        </>
                        
                        
                    }
                  
                    {showMovies&&
                   <>
                   {temp.cod==="404"?
                   <>
                   <h1 className="intro">{temp.message}</h1>
                   </>:
                   <>
                   <div className="temp"><div><h3 className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>{temp.name}</h3></div></div>
                    <div className="temp"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>{abc} </p></div>
                    <div className="temp"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}><span className={this.state.darkMode?"t":"dark-t"}>Temperature</span> {temp.main.temp}</p><div className={this.state.darkMode?"celcius":"dark-celcius"}></div><span className={this.state.darkMode?"sp":"dark-sp"} >C</span><i className={this.state.darkMode?"fas fa-cloud-sun dark-rain":"fas fa-cloud-sun rain"}></i></div>
                   <div className="temp"><div className="boom"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>min-temp {temp.main.temp_min}</p></div>
                    <div className={this.state.darkMode?"celcius":"dark-celcius"}></div><span className={this.state.darkMode?"sp":"dark-sp"} >C | </span>

                    <div className="boom"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>max-temp {temp.main.temp_max} </p></div>
                    <div className={this.state.darkMode?"celcius":"dark-celcius"}></div><span className={this.state.darkMode?"sp":"dark-sp"} >C</span> </div>
                    


                    <div className="temp"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>Feels like {temp.main.feels_like}</p><div className={this.state.darkMode?"celcius":"dark-celcius"}></div><span className={this.state.darkMode?"sp":"dark-sp"} >C</span></div>
                    <div className="temp"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>Humidity {temp.main.humidity}</p><span className={this.state.darkMode?"sp":"dark-sp"} >%</span></div>
                    <div className="temp"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>Visibility {temp.visibility}</p><span className={this.state.darkMode?"sp":"dark-sp"} >m</span></div>
                    <div className="temp"><p className={this.state.darkMode?"actual-temp":"dark-actual-temp"}>Wind Speed {temp.wind.speed}</p><span className={this.state.darkMode?"sp":"dark-sp"} >mPh</span></div>
                     
                   </>
                   }
                   
                   
                   </>
                    }
                </div>
             
                
            </div>}
            
         
            </>
        )
    }

}
function mapStateToProps(state){
    return{
        boom:state.temperature,

    }
}
export default connect(mapStateToProps)(WeatherCrad);