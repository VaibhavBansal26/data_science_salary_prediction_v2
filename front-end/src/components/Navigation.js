import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'


const Navigation = () => {
  return (
    <>
    <div className='menu'>
        <NavLink to="/" activeClassName="active-class" className='menu_item'  exact>Home</NavLink>
        <NavLink to="/about" activeClassName="active-class" className='menu_item'  exact>System Design</NavLink>
        <NavLink to="/project" activeClassName="active-class" className='menu_item' exact>Project Demo</NavLink>
        {/* <NavLink to="/visualization" activeClassName="active-class" className='menu_item' exact>Visualization</NavLink>  */}
    </div>
    </>
   
  )
}

export default Navigation