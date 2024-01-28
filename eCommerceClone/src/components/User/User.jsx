import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userId} = useParams()
  return (
    <div className='bg-gray-500 text-white text-3xl px-3 py-3'>
        <p>User: {userId}</p>
      
    </div>
  )
}

export default User
