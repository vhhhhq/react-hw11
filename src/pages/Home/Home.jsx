import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './Home.scss'


const  Home = ({user}) => {

    if (!user) {
        return <Navigate to="/landing" replace />;
      }

  return (
    <h2 className='home-h2'>Home (Protected: authenticated user required)</h2>
  )
}

export default Home