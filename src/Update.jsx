import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



function Update() {

    const {id} = useParams();
    // const [student, setStudent]=useState([]);
   
    useEffect(()=>{
        axios.get('http://localhost:3306/read/' + id)
        .then(res => {
            console.log(res)
            setValues({...values, name: res.data[0].Name, email: res.data[0].Email})
        })
        .catch(err => console.log(err))
    },[])
    const [values, setValues] = useState({
        name: '',
        email: '',
      });


      const navigate = useNavigate();

      const handleUpdate=(event)=>{
        event.preventDefault();
        axios.put('http://localhost:3306/update/' + id, values)
        .then(res =>{
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err))
      }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onClick={handleUpdate} >
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            ></input>
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            ></input>
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Update