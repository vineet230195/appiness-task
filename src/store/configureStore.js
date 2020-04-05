import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
//import userReducer from '../reducer/userReducer'
import userDashboard from '../reducer/userDashboard'
const configureStore=()=>{
    const store=createStore(combineReducers({
            dashboard:userDashboard
    }),applyMiddleware(thunk))

    return store
}

export default configureStore