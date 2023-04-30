import React from 'react'

function PreviewForm(props) {
  return (
    <>
    <p>First name: <strong>{props.fname}</strong></p>
    <p>Last name: <strong>{props.lname}</strong></p>
    <p>Email: <strong>{props.email}</strong></p>
    <p>Contact Number: <strong>{props.contact}</strong></p>
    <p>Qualification: <strong>{props.qualification}</strong></p>
    <p>College: <strong>{props.college}</strong></p>
    <p>Specialisation/Branch: <strong>{props.branch}</strong></p>
    <p>Total Experience: <strong>{props.experience}</strong></p>
    <p>Job Type: <strong>{props.jobType}</strong></p>
    <p>Role you are intrested in: <strong>{props.selectRole}</strong></p>
    </>
  )
}

export default PreviewForm