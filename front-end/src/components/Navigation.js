import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'


const Navigation = () => {
  return (
    <>
    <div className='menu'>
        <NavLink to="/" activeClassName="active-class" className='menu_item'  exact>Home</NavLink>
        {/* <NavLink to="/about" activeClassName="active-class" className='menu_item'  exact>About</NavLink>
        <NavLink to="/prediction" activeClassName="active-class" className='menu_item' exact>Prediction</NavLink>
        <NavLink to="/visualization" activeClassName="active-class" className='menu_item' exact>Visualization</NavLink> */}
    </div>
    </>
   
  )
}

export default Navigation