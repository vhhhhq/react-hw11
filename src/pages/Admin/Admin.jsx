import React from 'react'
import './Admin.scss'

const Admin = () => {
  return (
    <h2 className='admin-h2'>
      Admin (Protected: authenticated user with role 'admin' required)
    </h2>
  )
}

export default Admin