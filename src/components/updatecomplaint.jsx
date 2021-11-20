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
              const complaint={...this.state.complaint};
              complaint.complaintId = res.data.complaintId;
                      complaint.productModelNumber = res.data.productModelNumber;
                       complaint.complaintName = res.data.complaintName;
                       complaint.status = res.data.status;
                       complaint.clientId = res.data.clientId;
                       complaint.engineerId = res.data.engineerId;
            console.log(res.data);
            console.log(complaint);
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
        console.log("handleSubmit");
        const complaints={ 
          
        //    clientId: this.state.complaint.clientId,
        //   complaintId: this.state.complaint.complaintId,
        //   complaintName: this.state.complaint.complaintName,
        //    engineerId: this.state.complaint.engineerId,
        //    productModelNumber: this.state.complaint.productModelNumber,
          status: this.state.complaint.status
        
        }
      
      axios
      .put(
        `http://localhost:8080/api/updateComplaint/${this.props.match.params.complaintId}`,
      complaints
      )
      .then((res) => {
        this.props.history.push("/complaint");
      })
      .catch((err) => console.log(err));
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
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                    Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={this.state.complaint.status}
                  name="status"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                 clientId
                </label>
                <input
                  type="tel"
                  className="form-control"
                 
                  value={this.state.complaint.clientId}
                  name="clientId"
                  onChange={this.handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                 engineerId
                </label>
                <input
                  type="tel"
                  className="form-control"
                 
                  value={this.state.complaint.engineerId}
                  name="engineerId"
                  onChange={this.handleChange}
                />
              </div>
               
              
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