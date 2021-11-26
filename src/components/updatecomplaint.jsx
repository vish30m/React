import React, { Component } from 'react';
import axios from 'axios';
import Complaint from './complaint';
class UpdateComplaint extends React.Component {
    state = {
        complaint: {
          complaintId:"",
          productModelNumber: "",
          complaintName: "",
          status: "",
         clientId: "",
         engineerId: "",
        },
      
      };
      componentDidMount(){
          axios.get(`http://localhost:8080/api/getComplaint/${this.props.match.params.complaintId}`)
          .then((res)=>{
            //   const complaint={...this.state.complaint};
            //   complaint.complaintId = res.data.complaintId;
            //           complaint.productModelNumber = res.data.productModelNumber;
            //            complaint.complaintName = res.data.complaintName;
            //            complaint.status = res.data.status;
            //            complaint.clientId = res.data.clientId;
            //            complaint.engineerId = res.data.engineerId;
            // console.log(res.data);
            // console.log(complaint);
            this.setState({complaint: res.data})})
          .catch((err)=> console.log(err));
      }
    //   componentDidMount(){
    //       axios.get(
    //         `http://localhost:8080/api/getComplaint/${this.props.match.params.complaintId}`)
    //      .then((res) => {
    //         const complaint = { ...this.state.complaint };
    //         complaint.complaintId = res.data.complaintId;
    //         complaint.productModelNumber = res.data.productModelNumber;
    //         complaint.complaintName = res.data.complaintName;
    //         complaint.status = res.data.status;
    //         complaint.clientId = res.data.clientId;
    //         complaint.engineerId = res.data.engineerId;
    //         console.log(res.data);
    //         console.log(complaint);
    //         this.setState({ complaint: complaint });
    //       })
    //       .catch((err) => console.log(err));
    //   }
      handleChange = (event) => {
        const complaint = { ...this.state.complaint }; 
        complaint[event.target.name] = event.target.value; 
       
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ complaint: complaint });
      };
      handleSubmit = (event) => {  
        
        event.preventDefault();
        console.log(this.state.complaint);
      
      
      axios
      .put(
        `http://localhost:8080/api/updateComplaint/${this.props.match.params.complaintId}`,
       this.state.complaint
      )
      .then((res) => {
        this.props.history.push("/complaint");
      })
      .catch((err) => console.log(err));
      alert("status is updated");
  };
    
      render() {
        return (
          <div>
            <h3>Update Status</h3>
            <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3  ">
               <div className="mb-3"> 
             <label for="exampleInputName" className="form-label">
                  ProductModelNumber
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  value={this.state.complaint.productModelNumber}
                  name="productModelNumber"
                  onChange={this.handleChange}/>
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  ComplaintName
                </label>
                <input
                  type="text"
                  className="form-control"   
                  value={this.state.complaint.complaintName}
                  name="complaintName"
                  onChange={this.handleChange}
                />
              </div> 
             
              <label for="exampleInputEmail1" className="form-label">
                Status

            </label>
               <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.complaint.status}
            name="status"
            onChange={this.handleChange}
           required
          >
            <option selected>Status</option>
            <option value="open">open</option>
            <option value="close">close</option>
            <option value="resolved">Resolved</option>
            <option value="resolve online">ResolveOnline</option>
            <option value="resolved after homevisit">Resolve After homeVisit</option>
          </select>
             
             
              
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      }
    
}
 
export default UpdateComplaint;