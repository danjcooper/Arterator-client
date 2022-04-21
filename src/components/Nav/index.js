import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import './style.css';

const Nav = () => {

  // const navigate = useNavigate;
  
  return (
    <nav>
      <NavLink className='new-prompt-link' to='/'>New Prompt</NavLink>
      <NavLink className='random-prompt-link' to=''>Random Prompt</NavLink>
      <NavLink className='about-link' to='/about'>About</NavLink>
    
    </nav>
  )


}

export default Nav;