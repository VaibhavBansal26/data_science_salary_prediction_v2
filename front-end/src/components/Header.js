import React from 'react'
import './styles.css'
import Navigation from './Navigation'


const Header = () => {
  return (
    <div className='header'>
        <div className='header_sub'>
            <h2 style={{color:'white',padding:'10px'}}>Data Science Salary Prediction</h2>
            <Navigation/>
        </div>
    </div>
  )
}

export default Header