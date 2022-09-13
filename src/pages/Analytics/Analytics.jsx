import React from 'react'
import './Analytics.scss'

const Analytics = () => {
  return (
    <h2 className='analytics-h2'>
      Analytics (Protected: authenticated user with permission
      'analyze' required)
    </h2>
  )
}

export default Analytics