import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import favoriteReducer from "../reducer/favorite";
import thunk from "redux-thunk";
import jobsReducer from "../reducer/jobs";
import storage from 'redux-persist/lib/storage' 
import { persistStore,persistReducer } from "redux-persist";
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

const persistConfig = {
    key:'root',
    storage
}
const bigReducer = combineReducers({
    favorite:favoriteReducer,
    jobs:jobsReducer
})

const persistReducer = persistReducer(persistConfig,bigReducer)
export const configureStore = createStore(
    persistReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT? composeEnhancers(applyMiddleware(thunk)):compose(applyMiddleware(thunk))
  )

 export const persistor = persistStore(configureStore)
