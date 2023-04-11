import React from 'react'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>
        <li>home</li>
        </Link>
        <Link to={"/About"}>
        <li>About</li>
        </Link>
        <Link to={"/Contact"}>
        <li>Contact</li>
        </Link>
        <Link to={"/Detail"}>
        <li>Detail</li>
        </Link>

        

      </ul>
    </div>
  )
}

export default Navbars
