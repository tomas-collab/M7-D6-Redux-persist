export const addToFavoritesAction = (companyToAdd) => ({
    type: 'ADD_FAVORITES',
    payload: companyToAdd,
  })
export const removeFromFavoritsAction = (index)=>({
    type:'REMOVE_FAVORITES',
    payload: index
})


export const addToFavoritesActionThunk = (companyToAdd)=>{
          return async(dispatch,getState)=>{
            console.log(getState)
            dispatch({
              type:'ADD_FAVORITES',
              payload:companyToAdd,
            })
          }
}

export const fillJobAction = (searchjob)=>{
  return async(dispatch,getState)=>{
   
   
    const baseUrl = 'https://strive-jobs-api.herokuapp.com/jobs?limit=10'
    try {
        let response = await fetch(searchjob?baseUrl+ '&search=' + searchjob :baseUrl)
        if(response.ok){
            let data = await response.json()
            setTimeout(() => {
              dispatch({
                type: 'FILL_JOBS_LOADING',
                payload: false,
              })
            }, 1000)
            dispatch({
              type: 'FILL_JOBS_ERROR',
              payload: false,
            })
            dispatch({
              type: 'FILL_JOBS',
              payload: data.data
            })
             
        }else{
          console.log('error response is not good ')
          setTimeout(() => {
            dispatch({
              type: 'FILL_JOBS_LOADING',
              payload: false,
            })
          }, 1000)
          setTimeout(() => {
            dispatch({
              type: 'FILL_JOBS_ERROR',
              payload: true,
            })
          }, 1000)
        }
  } catch (error) {
      console.log(error)
      setTimeout(() => {
        dispatch({
          type: 'FILL_JOBS_ERROR',
          payload: true,
        })
      }, 1000)
      setTimeout(() => {
        dispatch({
          type: 'FILL_JOBS_LOADING',
          payload: false,
        })
      }, 1000)

  }
  }
}