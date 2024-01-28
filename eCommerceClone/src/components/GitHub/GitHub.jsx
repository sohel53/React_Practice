import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    console.log(data)
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/sohel52')
    //     .then(response => response.json())
    //     .then(data => 
    //         setData(data))
    // },[])

  return (
    <div className='bg-gray-500 text-white text-3xl text-center px-3 py-3 my-3'>
        GitHub LoginId: {data.login}
        <div className='flex flex-wrap justify-center my-3 py-3 px-3'>
            <img src={data.avatar_url} alt='github image' />
        </div>
      
    </div>
  )
}

export default GitHub

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/sohel52')
    return response.json()
}
