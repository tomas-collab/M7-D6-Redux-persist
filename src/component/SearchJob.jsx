import { useState,useEffect } from 'react'
import {Form, FormControl, ListGroup,Col,Row, Container} from 'react-bootstrap'
import CompanyDetail from './CompanyDetail'
import HomePage from './HomePage'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fillJobAction } from '../actions'


const mapStateToProps = (state)=>state
  
  // favLength: state.favorite.company.length


const mapDispatchToProps =dispatch=>({
       fetchData:(search)=>dispatch(fillJobAction(search))
       
})
const SearchJob =({fetchData,favLength,...props})=>{

    const [search, setSearch] = useState('')
  
        console.log('test',props)
        return(
            <Container className="">
            <Row xs={10} className='mx-auto mb-5'>
                      <Form onSubmit={fetchData}>
                          <p className="my-3 search-job">SEARCH JOBS</p>
                          <FormControl 
                              placeholder='Search jobs'
                              className="my-4"
                              type="text"                                 
                              value={search}
                              onChange={(e)=>{
                                setSearch(e.currentTarget.value.toLowerCase()) 
                                fetchData(e.currentTarget.value.toLowerCase())                               
                                }}/>                              
                      </Form>  
                  <span className="ml-2">FAV:{favLength}</span>
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchJob)