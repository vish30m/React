
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
import Sid from './components/clientallcomplaints';
import Login from './components/login';
import Engineer from './components/engineer';
import Product from './components/product';
import Open from './components/open';
import UpdateComplaint from './components/updatecomplaint';
import Cform from './components/cform';
import Navbar from './components/navs';
import Complaintt from './components/complaintt';
import ComplaintRedux from './components/complaintredux';
import Validationform from './components/engineerform';
import Engineers from './components/engineers';
import Updateengineer from './components/updateengineer';
import Admin from './components/admin';
import AdminForm from './components/adminform';
import About from './components/about';
import Products from './components/products';
import Pform from './components/pform';
import Uform from './components/uform';
import UpdateProduct from './components/updateform';
import Register from './components/register';
import Contact from './components/contact';
// import Engineerredux from './components/engineerredux';
// import engineerredux from './components/engineerredux';
import Login1 from './components/login1';
import AdminValidationForm from './components/adminform';
// import complaintsByStatus from './components/complaintsbystatus';
import ComplaintsByStatus from './components/complaintsByStatus';
import ProductsByModel from './components/productsbymodel';
import Clientallcomplaints from './components/clientallcomplaints';
import EngineerList from './components/engineerlist';
import Idsearch from './components/idsearch';
import Statussearch from './components/statussearch';
import UpdateComplaint1 from './components/updatecomplaint1';
import Client from './components/client';
import Saveclient from './components/saveclient';
import UpdateClient from './components/updateclient';

function App() {
  return (
    <div className="App">
     <Navbar/>
       {/* <Nav/>  */}
      
      <Switch>
        
        {/* <Route path="/complaintForm" component={ComplaintForm}/> */}
        {/* <Route path='/complaint' component={ComplaintRedux}/> */}
        {/* <Route path='/complaint' component={Complaint}/> */}
        <Route path='/complaint' component={Complaintt}/>
        <Route path='/complaints/add' component={Cform}/>
        <Route path='/engineers' component={Engineers}/>
        <Route path='/engineerlist' component={EngineerList}/>
        <Route path='/idsearch' component={Idsearch}/>
        <Route path='/statussearch' component={Statussearch}/>
        <Route path='/addEngineers' component={Validationform}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/products' component={Products}/>
        <Route path='/updatecomplaint1' component={UpdateComplaint1}/>
        <Route path='/client' component={Client}/>
        <Route path='/updateclient/:clientId' component={UpdateClient}/>
        <Route path='/saveclient' component={Saveclient}/>
        <Route path='/getProducts/add' component={Pform}/>
        {/* <Route path='/getProducts/update/:modelNumber' component={UpdateProduct}/> */}
        <Route path='/about' component={About}/>
        <Route path='/getAdmins/add' component={AdminValidationForm}/>
        <Route path='/getAdmins/complaintByStatus' component={ComplaintsByStatus}/>
        <Route path='/getAdmins/addEngineer' component={Engineers}/>
        <Route path='/getAdmins/getProducts' component={ProductsByModel}/>
        <Route path='/getEngineers/update/:employeeId' component={Updateengineer}/>
        <Route path='/complaints/update/:complaintId' component={UpdateComplaint}/>
       <Route path='/complaints/clientAllComplaints' component={Clientallcomplaints}/>
       <Route path='/complaints/clientAllOpenComplaints' component={Open}/>
       <Route path='/complaints/engineerdetails/:complaintId' component={Engineer}/>
       <Route path='/complaints/productdetails/:complaintId' component={Product}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/cform' component={Cform}/>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
      
    </div>
  );
}

export default App;
