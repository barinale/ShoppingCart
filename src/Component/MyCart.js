import React from 'react'
import { ItemCart } from './ItemCart'
import { UseCart } from '../context/CartContext'

export const MyCart = () => {
  const {value,RemoveCart} = UseCart() 

  return (
    <div className='container m-auto py-4'>
        <h1 className='font-bold text-center text-lg mb-2'>
          Cart items : {value.cartList.length} / {value.total}$
        </h1>
        {value.cartList.map((item)=>{
          return <ItemCart key={item.id} product={item} removeItem={RemoveCart}/>
        })}
    </div>
  )
}
