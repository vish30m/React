
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
import Sid from './components/sid';
import Login from './components/login';
import Engineer from './components/engineer';
import Product from './components/product';
import Open from './components/open';
import UpdateComplaint from './components/updatecomplaint';
import Cform from './components/cform';
import Navbar from './components/navs';
import Complaintt from './components/complaintt';
import ComplaintRedux from './components/complaintredux';
function App() {
  return (
    <div className="App">
     <Navbar/>
       {/* <Nav/>  */}
      
      <Switch>
        
        {/* <Route path="/complaintForm" component={ComplaintForm}/> */}
        <Route path='/complaint' component={ComplaintRedux}/>
        {/* <Route path='/complaint' component={Complaint}/> */}
        {/* <Route path='/complaint' component={Complaintt}/> */}
        <Route path='/complaints/add' component={Cform}/>
        
        <Route path='/complaints/update/:complaintId' component={UpdateComplaint}/>
       <Route path='/complaints/clientAllComplaints' component={Sid}/>
       <Route path='/complaints/clientAllOpenComplaints' component={Open}/>
       <Route path='/complaints/engineerdetails/:complaintId' component={Engineer}/>
       <Route path='/complaints/productdetails/:complaintId' component={Product}/>
        <Route path='/login' component={Login}/>
        <Route path='/cform' component={Cform}/>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
