import React, { useState } from 'react'

const Shimmer = () => {
    let arr = [1,1,1,1,1,1,1,1]
  return (
    <div className="flex flex-wrap justify-evenly bg-gray-100">
    {
      arr.map((dummy,index)=> <div key={index+123} className='min-w-60 w-60 h-60  m-9 bg-gray-300 rounded shadow-sm shadow-gray-400 hover:scale-95'></div>)
    }
     
    </div>
  )
}

export default Shimmer
