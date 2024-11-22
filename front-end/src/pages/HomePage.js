import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'
import './styles.css'

const HomePage = () => {
  return (
    <div className='home'>
        <Header/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default HomePage