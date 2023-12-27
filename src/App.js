import React from 'react'

import {BrowserRouter as  Router , Routes , Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/services.scss"
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'

import "./styles/mediaqueries.scss"


export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
   
  )
}
