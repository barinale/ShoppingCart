import React from 'react'
import { ItemCart } from './ItemCart'
import { UseCart } from '../context/CartContext'
import { useSelector } from 'react-redux'

export const MyCart = () => {
  const {value,RemoveCart} = UseCart() 
  const data = useSelector(state=>state.cartState)
  console.log(data)
  return (
    <div className='container m-auto py-4'>
        <h1 className='font-bold text-center text-lg mb-2'>
          Cart items : {data.cartList.length} / {data.Total}$
        </h1>
        {data.cartList.map((item)=>{
          return <ItemCart key={item.id} product={item} removeItem={RemoveCart}/>
        })}
    </div>
  )
}
