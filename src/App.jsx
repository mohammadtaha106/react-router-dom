import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './assets/components/Auth/Auth'
import Navbar from './assets/components/Navbar'

import SignUp from './assets/components/Auth/SignUp'
import SignIn from './assets/components/Auth/SignIn'
import AboutUs from './assets/components/AboutUs'
import ContactUs from './assets/components/ContactUs'
import Home from './assets/components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './assets/components/NotFound'

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