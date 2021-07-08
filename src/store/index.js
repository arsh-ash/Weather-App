import{applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import reducers from "../reducers"
let store;
export default function storeCreater(){

    store=createStore(reducers,applyMiddleware(thunk))
    return store
}