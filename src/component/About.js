import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();//navigate test
  return (
    <div>
      <h1>welcome to About page</h1>
      <button onClick={() => navigate('/home')}>Navigate to home </button>
    </div>
  )
}

export default About
