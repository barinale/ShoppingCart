import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Cart } from '../Pages/Cart'
import { PageNotFound } from '../Pages/PageNotFound'
 
export const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
