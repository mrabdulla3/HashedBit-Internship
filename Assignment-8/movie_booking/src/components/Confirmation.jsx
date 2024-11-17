import React from 'react'
import { useLocation } from 'react-router-dom'
const Confirmation = () => {
  const {state}=useLocation();
  if (!state) {
    return <p>No data available. Please go back and fill the form.</p>;
  }
  const {name, email, phone,confirmId}=state;
  return (
    <div>
     <h2>Booking Confirmation</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Confirmation ID:</strong> {confirmId}</p>
    </div>
  )
}

export default Confirmation