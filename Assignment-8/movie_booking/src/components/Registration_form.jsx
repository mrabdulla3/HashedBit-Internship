import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration_form = () => {
  const [formData, setFormData]=useState({
    name:"",
    phone:"",
    email:""
  });
  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const confirmId=Math.random().toString(36).substring(2,9).toUpperCase();
  navigate("/confirmation",{state:{...formData,confirmId}});

  }
  return (
    <div className='container mt-5 mb-2'>
      <h4>Book your seat now</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input name='name' type="text" placeholder='Enter your name'  value={formData.name}
            onChange={handleChanges}  className="form-control" required/>
        </div>
        <div className="mb-3">
          <input name='email' type="text" placeholder='Enter your email'  value={formData.email}
            onChange={handleChanges}  className="form-control" required/>
        </div>
        <div className="mb-3">
          <input name='phone' type="tel" placeholder='Phone'   value={formData.phone}
            onChange={handleChanges} className="form-control" required/>
        </div>
        <button type='submit' className='btn btn-primary'>Book Now</button>
      </form>
      
    </div>
  )
}

export default Registration_form
