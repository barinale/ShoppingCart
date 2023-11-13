import React from 'react'

export const Card = () => {
  return (
    <div className='p-2 w-72 shadow-lg border '>
            <img src='' alt="img  1 "  className='bg-gray-500 w-full h-auto'/>
            <h1 className='mt-1 font-semibold'>Sony Tilte</h1>
        <div className='mt-2 flex justify-between items-center'>
            <span className='font-semibold'>149$</span>
            <button className='bg-sky-700 p-2 text-white rounded'>Add To Cart</button>
        </div>
    </div>
  )
}
