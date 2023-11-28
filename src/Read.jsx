import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Read() {
    const {id} = useParams();
    const [student, setStudent] = useEffect();

    useEffect(()=>{
        axios.get('http://localhost:3306/read/' + id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0]);
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h2>Student Details</h2>
            <h2>{student.ID}</h2>
            <h2>{student.Name}</h2>
            <h2>{student.Email}</h2>
        </div>

        <link to="/" className='btn btn-primary me-2'>Back</link>
        <link to={`/edit/${student.ID}`} className='btn btn-info'>Edit</link>
    </div>
  )
}

export default Read