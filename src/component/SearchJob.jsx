import { useState,useEffect } from 'react'
import {Form, FormControl, ListGroup,Col,Row, Container} from 'react-bootstrap'
import CompanyDetail from './CompanyDetail'
import HomePage from './HomePage'
import { connect,useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fillJobAction } from '../actions'


// const mapStateToProps = (state)=>state
  
  // favLength: state.favorite.company.length


// const mapDispatchToProps =dispatch=>({
//        fetchData:(search)=>dispatch(fillJobAction(search))
       
// })
const SearchJob =({...props})=>{
 const state = useSelector(state => state)
 const dispatch = useDispatch()

    const [search, setSearch] = useState('')


   
  
        console.log('test',props)
        return(
            <Container className="">
            <Row xs={10} className='mx-auto mb-5'>
                      <Form onSubmit={dispatch(fillJobAction())}>
                          <p className="my-3 search-job">SEARCH JOBS</p>
                          <FormControl 
                              placeholder='Search jobs'
                              className="my-4"
                              type="text"                                 
                              value={search}
                              onChange={(e)=>{
                                setSearch(e.currentTarget.value.toLowerCase()) 
                                dispatch(fillJobAction(e.currentTarget.value.toLowerCase()))                              
                                }}/>                              
                      </Form>  
                  <span className="ml-2">FAV:{props.favLength}</span>
                  <Link to='/favorite'>Favorite</Link>
             </Row>

           

            <Row md={4} className='mx-auto mb-5 home-page d-flex'>      
                  {
                    props.jobs.list.map(job=><HomePage data={job} />)
                  }   
             </Row>
           
             

            </Container>
        )
    
}

export default SearchJob