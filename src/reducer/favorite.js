import { initialState } from "../store";

const favoriteReducer = (state=initialState.favorite,action)=>{
       switch (action.type) {
           case 'ADD_FAVORITES':
               return{
                 
                      ...state,company:[...state.company,action.payload]
                 
               }
            case 'REMOVE_FAVORITES':
                return {
                    ...state,company:state.company.filter((fav,i)=>i!==action.payload)
                }
         default:
                return state
               
       }
}
// console.log('check' ,state,action )
export default favoriteReducer