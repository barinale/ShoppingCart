import React from 'react'
import {  MyCart } from '../Component'
import { useTitle } from '../Hooks/useTitle'

export const Cart = () => {
   useTitle('Cart')
  return (
    <div>
        <MyCart />
    </div>
  )
}
