import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {
const reducer = (state , action)=>{
    switch (action.type) {
        case 'ADD':

        const tempstate = state.filter((data)=>action.payload.id === data.id)
            if (tempstate.length > 0) {
                return state
            } else {
                return [...state,action.payload]
            }
           
    
        default:
             return state;
            
    }
}
const [state, dispatch] = useReducer(reducer,[])
const info ={state, dispatch}
    return (
        <CartContext.Provider value={info}>
            {props.children}
        </CartContext.Provider>
    );
};
