import React from 'react'
import { UseCart } from '../context/CartContext';

export const ItemCart = ({product}) => {
  const {name,price,image} = product;
  const {RemoveCart}= UseCart()
  return (
    <div className=' w-full flex justify-between items-center border shadow-md p-2'>
        <img src={image} alt="img " className='w-56'/>
        <h6>{name}</h6>
        <h6>${price}</h6>
        <button className='bg-red-600 p-2 rounded' onClick={()=>RemoveCart(product)}>Remove</button>
    </div>
  )
}
