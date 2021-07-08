import {UPDATE_STATE,UPDATE_INITIAL} from "./actionsTypes"



export function getTemperature(state){
    const key="a4be6973cc6b9717d7a85cdcba46fd56";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${key}&units=metric`
     return(dispatch)=>{
      
        fetch(url)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
            
            dispatch(updateState(data));
            
        }).catch((error)=>{
            console.log("errrooorr",error)
        })
    }

}
export function updateState(data){
    return{
        type:UPDATE_STATE,
        data:data
    }
    
}


export function getInitialTemperature(state){
    const key="a4be6973cc6b9717d7a85cdcba46fd56";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${key}&units=metric`
     return(dispatch)=>{
      
        fetch(url)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
              console.log("DATAAAA",data)
            dispatch(updateInitial(data));
            
        }).catch((error)=>{
            console.log("errrooorr",error)
        })
    }


}


export function updateInitial(data){
    return{
        type:UPDATE_INITIAL,
        data:data
    }
    
}





