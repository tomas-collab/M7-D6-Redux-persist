import { Container,Row,Col, NavItem } from "react-bootstrap"
import { useState } from "react"
import JobCard from "./JobCard"
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import { Button } from "react-bootstrap"
import { useEffect } from "react"
import { withRouter } from "react-router"


const CompanyDetail = ({addToFavorites,match})=>{

const [jobs, setJobs] = useState([])
useEffect(() => {
   fetchData()
}, [])
    const fetchData = async()=>{
       
    //    console.log('paramsname',match.params.companyName)
       let response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=20&company_name'+match.params.companyName)
       if(response.ok){
           let company = await response.json()
           console.log('params',company)
           setJobs(company.data)

       }
    }
    return(
        <Container>
            <Row>
        
                <Col sm={12}>
                <ol>
                   {
                       jobs.map(name=> 
                           <li className='favorites'>
                                <p className='company-name '> company-name: {name.company_name}</p>
                                <a className='company-link' href={name.url} target='_blank'>apply</a>
                                {/* <Link to={{pathname:name.url}} target='_blank'>{name.url}</Link> */}
                           </li>
                          
                        )
                   }
                </ol>
                </Col>
                
            </Row>
        </Container>
        )
           
    
}
export default (withRouter(CompanyDetail))