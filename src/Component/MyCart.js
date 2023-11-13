import React from 'react'
import { ItemCart } from './ItemCart'

export const MyCart = () => {
  return (
    <div className='container m-auto py-4'>
        <h1 className='font-bold text-center text-lg mb-2'>Card items : 2</h1>
        <ItemCart className=""/>
    </div>
  )
}
