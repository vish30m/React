
import './App.css';
import Nav from './components/nav';
//import Complaint from './components/complaint';
//import ComplaintForm from './components/complaintForm';
import Home from './components/home';
import PageNotFound from './components/PageNotFound';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Complaint from './components/complaint';
import ComplaintForm from './components/complaintForm';
import Login from './components/login';
import UpdateComplaint from './components/updatecomplaint';
function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Switch>
        
        {/* <Route path="/complaintForm" component={ComplaintForm}/> */}
        <Route path='/complaint' component={Complaint}/>
        <Route path='/complaints/add' component={ComplaintForm}/>
        <Route path='/complaints/update/:complaintId' component={UpdateComplaint}/>
        <Route path='/login' component={Login}/>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
