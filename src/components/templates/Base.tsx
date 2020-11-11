import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const Base: React.FC = (props) => {
  return (
    <>
      <Header/>
        {props.children}
      <Footer/>
    </>
  )
}