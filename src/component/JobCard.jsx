
import {Card, ListGroup,Button} from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect,useSelector,useDispatch } from 'react-redux'
import { addToFavoritesAction, addToFavoritesActionThunk } from "../actions"
import Favorites from './Favorites'
import {AiFillStar} from 'react-icons/ai'

// const mapStateToProps = state => state
//  const mapDispatchToProps = dispatch => ({
//         addToFavorites: (companyToAdd) => dispatch(addToFavoritesActionThunk(companyToAdd)),
//       })

const JobCard =({addToFavorites, favorite,history,category,job_type,publication_date,salary,title,url,company_name})=>{
  
    const state = useSelector(state => state)
    const dispatch = useDispatch()
// const isFav = favorite.includes(company_name)
const toggleFavorite = ()=>{
    dispatch(addToFavorites(company_name))
}


    return(
          <Card className='my-5 mx-3' >
              <button onClick={()=>history.push(`/:${company_name}`)}>{company_name}</button> 
              
              <ListGroup.Item>{category}</ListGroup.Item>
              <ListGroup.Item>{job_type}</ListGroup.Item>  
              <ListGroup.Item>{publication_date}</ListGroup.Item>  
              <ListGroup.Item>{salary}</ListGroup.Item>  
              <ListGroup.Item>{title}</ListGroup.Item>  
              <ListGroup.Item>{url}</ListGroup.Item>  
              <AiFillStar color="primary" onClick={toggleFavorite}
                                 
                                  />
          </Card>  
    )
}

export default withRouter(JobCard)

