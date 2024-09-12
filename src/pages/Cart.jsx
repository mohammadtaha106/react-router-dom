import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrashCan } from "react-icons/fa6";

function Cart() {
  const globalstate = useContext(CartContext);
  const state = globalstate.state;
  const dispatch = globalstate.dispatch;

  return (
    <>
      <div>
        {state.map((data) => {
          return (
            <section className="py-24 relative bg-white" key={data.id}>
              <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-manrope font-bold text-4xl leading-10 mb-8 text-center text-purple-700">
                  {data.title}
                </h2>
                <div className="rounded-3xl border-2 border-purple-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 bg-white shadow-md">
                  <div className="col-span-12 lg:col-span-2 img box">
                    <img
                      src={data.image}
                      alt="product image"
                      className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                    <div className="flex items-center justify-between w-full mb-4">
                      <h5 className="font-manrope font-bold text-2xl leading-9 text-purple-600">
                        {data.category}
                      </h5>
                      <button  onClick={() => dispatch({ type: "REMOVE", payload: data })}
                        className="rounded-full group flex items-center justify-center focus:outline-none"
                      >
                        <FaTrashCan />
                      </button>
                    </div>
                    <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                      {data.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => dispatch({ type: "INCREASE", payload: data })}
                          className="group rounded-[50px] border border-purple-200 shadow-sm p-2.5 flex items-center justify-center bg-purple-100 transition-all duration-500 hover:shadow-purple-200 hover:bg-purple-50"
                        >
                          <svg
                            className="stroke-purple-600 transition-all duration-500 group-hover:stroke-purple-700"
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.5 9.5H13.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <p className="border border-purple-200 rounded-full w-10 aspect-square outline-none text-purple-700 font-semibold text-sm py-1.5 px-3 bg-purple-100 text-center">
                          {data.quantity}
                        </p>
                        <button
                          onClick={() =>{ if (data.length > 0) {
                            dispatch({ type: "DECREASE", payload: data })
                          } else {
                            dispatch({ type: "REMOVE", payload: data })
                            
                          }}}
                          className="group rounded-[50px] border border-purple-200 shadow-sm p-2.5 flex items-center justify-center bg-purple-100 transition-all duration-500 hover:shadow-purple-200 hover:bg-purple-50"
                        >
                          <svg
                            className="stroke-purple-600 transition-all duration-500 group-hover:stroke-purple-700"
                            width={18}
                            height={19}
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.75 9.5H14.25M9 14.75V4.25"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <h6 className="text-purple-600 font-manrope font-bold text-2xl leading-9 text-right">
                        {data.quantity * data.price}
                        <span>$</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
        <>
          <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-purple-200 max-w-xl mx-auto">
            <h5 className="text-purple-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
              Subtotal
            </h5>
            <div className="flex items-center justify-between gap-5 ">
              <button className="rounded-full py-2.5 px-3 bg-purple-50 text-purple-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-purple-100">
                Promo Code?
              </button>
              <h6 className="font-manrope font-bold text-3xl lead-10 text-purple-600">
                22$
              </h6>
            </div>
          </div>
          <div className="max-w-6xl mb-4 mx-auto">
            <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
              Shipping taxes, and discounts calculated at checkout
            </p>
            <button className="rounded-full py-4 px-6 bg-purple-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-purple-700">
              Checkout
            </button>
          </div>
        </>
      </div>
    </>
  );
}

export default Cart;
