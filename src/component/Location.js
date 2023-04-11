import React from 'react'
import { useLocation } from "react-router-dom";
const Location = () => {
    const location = useLocation();
  return (    
     console.log(location)
  )
}

export default Location
