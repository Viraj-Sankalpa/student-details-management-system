import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function Create() {

    const [values, setValues] = useState({
        name:'',
        email:''
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3306/student', values)
        .then(res => console.log(res))
        .catch(err =>console.log(err))
    }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              onChange={e=>setValues({...values, name:e.target.value})}
            ></input>
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              onChange={e=>setValues({...values, email:e.target.value})}
            ></input>
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
