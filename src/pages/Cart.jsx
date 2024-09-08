import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'


function Cart() {
  
  const globalstate =  useContext(CartContext)
  const state = globalstate.state
  const dispatch = globalstate.dispatch
  console.log(state);
  

  return (
    <>
    <div>

      {
        state.map((data)=>{
          return(
       

              <img src={data.image} alt="" />


            
          )
        })
      }


    </div>
    </>
    
  )
}

export default Cart
