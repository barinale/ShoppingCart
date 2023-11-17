import React, { useEffect, useState } from 'react'
import { UseCart } from '../context/CartContext'

export const Card = ({item}) => {
  const [inCart,SetinCart]=useState(false);
  const {AddToCart,RemoveCart,value} =UseCart()
    const {total,cartList} = value;
  //Hanl Add and Remove To Cart
  const HandAdd=()=>{AddToCart(item)}
  const HandRmove = ()=>{RemoveCart(item)}
  //Function for check if the Item Already in List so will display remove Button Instead of Add Button 
  useEffect(()=>{
        let productsInInCart = cartList.find((item1)=>item1.id===item.id)
        if(productsInInCart){
          SetinCart(true)
        }else{
          SetinCart(false)
        }
     },
                [item,cartList])

  return (
    <div className='p-2 w-72 shadow-lg border '>
            <img src={item.image} alt="img  1"  className='bg-gray-500 w-full h-auto'/>
            <h1 className='mt-1 font-semibold'>{item.name}</h1>
        <div className='mt-2 flex justify-between items-center'>
            <span className='font-semibold'>{item.price}$</span>
            
            {!inCart ?<button className='bg-sky-700 p-2 text-white rounded'
             onClick={()=>{HandAdd()}}>Add To Cart</button>:
                          <button className='bg-red-600  p-2 text-white rounded'
             onClick={()=>{HandRmove()}}>Remove from Cart</button>
             }

        </div>
    </div>
  )
}
