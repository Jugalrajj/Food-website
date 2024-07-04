import React from 'react'
import './Header.css'
import { Link } from 'react-scroll';


const Header = () => {
 
  return (
    <div className='header'>
        <div className='header-content'>
            <h2>Order your favourite food here</h2>
            <p>"Indulge in flavor.<br/> savor the moment"</p>
            
            <Link to="explore-menu" smooth={true} duration={500}>
          <button>View Menu</button>
        </Link>
        </div>
    </div>
  )
}

export default Header