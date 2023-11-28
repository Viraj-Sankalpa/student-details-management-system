import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3306/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete=(id)=>{
    axios.delete('http://localhost:3306/delete/' + id)
    .then((res) => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    })
      .catch((err) => console.log(err));
    
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-cener align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h2>Student List</h2>
        <div className='d-flex justify-content-end'>
          <link to="/create" className='btn btn-success'>Create +</link>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.ID}</td>
                  <td>{student.Name}</td>
                  <td>{student.Email}</td>
                  <td>
                    <link to={`/read/${student.ID}`} className='btn btn-sm btn-info'>Read</link>
                    <link to={`/edit/${student.ID}`} className='btn btn-sm btn-primary mx-2'>Edit</link>
                    <buttonn onclick={()=> handleDelete(student.ID)} className='btn btn-sm btn-danger'>Delete</buttonn>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
