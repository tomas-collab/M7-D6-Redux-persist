import {Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CompanyDetail from './CompanyDetail'
import JobCard from './JobCard'




const HomePage = ({data})=>{
   
    return(
        
        <JobCard  category={data.category}
        company_name={data.company_name}
        description={data.description}
        job_type={data.job_type}
        publication_date={data.publication_date}
        salary={data.salary}
        title={data.title}
        url={data.url}/>
    )
      

}
export default HomePage