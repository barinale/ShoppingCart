import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {
    const navigat = useNavigate();
  return (
    <div>
        This Page Not FOUDN 
        <button onClick={()=>{
            navigat('/');
        }}>Back To Home</button>
    </div>
  )
}
