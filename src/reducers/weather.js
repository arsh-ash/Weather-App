import { UPDATE_STATE,UPDATE_INITIAL} from "../actions/actionsTypes"

 const initialState={
     temp:[],
     showMovies:false,
 }
export function temperature(state=initialState,action){
    if(action.type===UPDATE_STATE ){
        return{
            ...state,
            temp:action.data,
            showMovies:true

            

        }
    }
    else if(action.type===UPDATE_INITIAL ){
        return{
            ...state,
            temp:action.data,
        }
    }
    
    return{
        state
    }

}