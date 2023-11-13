import  { useEffect } from 'react'

export const useTitle = (params) => {
    useEffect(()=>{
        document.title =params;
    },[params])
  return null;
}
