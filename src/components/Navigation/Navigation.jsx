import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => {
  return (
   <nav className='navigation'>
    <Link to="/landing" className='link'>Landing</Link>
    <Link to="/home" className='link'>Home</Link>
    <Link to="/dashboard" className='link'>Dashboard</Link>
    <Link to="/analytics" className='link'>Analytics</Link>
    <Link to="/admin" className='link'>Admin</Link>
   </nav>
  )
}

export default Navigation