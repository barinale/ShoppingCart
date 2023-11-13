import React from 'react'
import { Cards } from '../Component'
import { useTitle } from '../Hooks/useTitle'

export const Home = () => {
   useTitle("Home");
  return (
    <div>
        <Cards />
    </div>
  )
}
