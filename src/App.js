import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, BrowserRouter as Router} from 'react-router-dom'
import {Link, Route}  from 'react-router-dom'
import {Container} from 'react-bootstrap'
import CompanyDetail from './component/CompanyDetail';
import SearchJob from './component/SearchJob';
import { useState } from 'react';
import Favorites from './component/Favorites';

const App =() =>{
  // const [jobs, setJobs] = useState([])
  const [Selected, setselected] = useState(null)

  return (
    <div className="App">
      <Router>
        <Container>
         <BrowserRouter>
         <Switch>
          <Route path="/favorite" exact render={(propsRouter)=><Favorites selected={Selected} setselected={setselected} {...propsRouter}/>}/>
          <Route path="/:companyName" exact render={(propsRouter)=><CompanyDetail  {...propsRouter}/>}/>
          <Route path="/" exact render={(propsRouter)=><SearchJob  {...propsRouter}/>}/>
         </Switch>
         </BrowserRouter>
        </Container>
      </Router>
    </div>
  );
}

export default App;
