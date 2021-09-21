import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import favoriteReducer from "../reducer/favorite";
import thunk from "redux-thunk";
import jobsReducer from "../reducer/jobs";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export const initialState = {
    favorite:{
          company:[],
    },
    jobs:{
        list:[],
        loading:true,
        error:false,
    },
}

const bigReducer = combineReducers({
    favorite:favoriteReducer,
    jobs:jobsReducer
})

const configureStore = createStore(
    bigReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT? composeEnhancers(applyMiddleware(thunk)):compose(applyMiddleware(thunk))
  )

  export default configureStore