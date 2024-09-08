import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Auth from './pages/Auth/Auth'
import Navbar from './components/Navbar'

import SignUp from './pages/Auth/SignUp'
import SignIn from './pages/Auth/SignIn'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/auth'element={<Auth/>}/>
      <Route  path='/signup' element={<SignUp/>}/>
      <Route  path='/signin' element={<SignIn/>}/>
      
      <Route   path='*' element={<NotFound/>}/>
      <Route path='/cart' element={<Cart/>}></Route>

    </Routes>
    
    </BrowserRouter>
   


    
    

    
    </>
  )
}

export default App