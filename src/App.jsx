import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar'

import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/auth'>
      <Route  index element={<Auth/>}/>
      <Route  path='signup' element={<SignUp/>}/>
      <Route  path='signin' element={<SignIn/>}/>
      </Route>
      <Route   path='*' element={<NotFound/>}/>

    </Routes>
    
    </BrowserRouter>
   


    
    

    
    </>
  )
}

export default App