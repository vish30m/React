import React from 'react';
import axios from 'axios';
class Sid extends React.Component {
   
 

constructor(props) {
    super(props);
    this.state = {value: '',complaints:[],};
    
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event) {   
     this.setState({value: event.target.value});
       }
  handleSubmit(event) {
     //alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
axios
  .get(`http://localhost:8080/api/getAllComplaint/${this.state.value}`)
  .then((res) => {
    const complaint={...this.state.complaint};
              complaint.complaintId = res.data.complaintId;
                      complaint.productModelNumber = res.data.productModelNumber;
                       complaint.complaintName = res.data.complaintName;
                       complaint.status = res.data.status;
                       complaint.clientId = res.data.clientId;
                       complaint.engineerId = res.data.engineerId;
            console.log(res.data);
            console.log(complaint);
    
    this.setState({ complaints: res.data });
  })
  .catch((error) => console.log(error));
}
render(){
    return <div className="container ">
         <form onSubmit={this.handleSubmit} >
<label>
  <b>
 Search
 </b>
  <input type="text" className="mt-5 ms-3" value={this.state.value} onChange={this.handleChange} />        </label>
<input type="submit"  className="btn btn-dark   ms-3" value="Submit" />
</form>
    <table className="table  table-striped table-hover border border-5 border-dark mx-auto mt-5 ">
      <thead className="table-info">
        <tr>
          <th>ComplaintId</th>
          <th>ProductModelNumber</th>
          <th>ComplaintName</th>
          <th>Status</th>
          {/* <th>
              ClientId
          </th>
          <th>
              EngineerId
          </th> */}

        </tr>
      </thead >
      <tbody>
        {this.state.complaints.map((complaint) => (
          <tr>
              <td>{complaint.complaintId}</td>
            <td>{complaint.productModelNumber}</td>
            <td>{complaint.complaintName}</td>
            <td>{complaint.status}</td>
            {/* <td>{complaint.clientId}</td>
            <td>{complaint.engineerId}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  
  </div>
}
}
 
export default Sid;