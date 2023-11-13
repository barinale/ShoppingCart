import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='container m-auto flex justify-between border-b border-b-stone-500 items-center py-5'>
        <div>
            Logo
        </div>
        <div>
            <ul className='flex gap-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
            </ul>
        </div> 
        <div>
            <span>Card : 2</span>
        </div>

    </div>
  )
}
