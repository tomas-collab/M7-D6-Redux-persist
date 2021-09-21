import { initialState } from "../store";


const jobsReducer = (state= initialState.jobs,action)=>{
    switch(action.type){
        case 'FILL_JOBS':
            return{
                ...state,
                list:action.payload
            }
        case "FILL_JOBS_LOADING":
            return{
                ...state,
                loading:action.payload
            }
        case "FILL_JOBS_ERROR":
           return{
               ...state,
               error:action.payload,
           }
        default:
            return state
    }
}

export default jobsReducer