import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()


  const handleoncreateacc = async (e)=>{
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
 

      toast.success('Account created successfully! Please sign in.', {
        position: 'top-center',
        autoClose: 2000,
      });

    
      setTimeout(() => {
        toast.dismiss()
        navigate('/signin');  
      }, 2000);

    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-purple-700">
            <div className="text-3xl font-extrabold text-purple-700">
              <span style={{ fontFamily: 'Cursive, sans-serif' }}>&lt;MUSA /&gt;</span>
            </div>
          </a>
          <div className="w-full sm:max-w-md xl:p-0">
            <div className="p-6 space-y-6">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-purple-900 md:text-3xl dark:text-purple-800">
                Create an account
              </h1>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-2xl font-medium text-purple-900"
                  >
                    Your email
                  </label>
                  <input

                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-purple-900 text rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-2xl font-medium text-purple-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    required=""
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-2xl font-medium text-purple-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-lg">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500"
                    >
                      I accept the{' '}
                      <a
                        className="font-medium text-purple-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                onClick={handleoncreateacc}
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <ToastContainer />
                <p className="text-lg font-light text-gray-500">
                  Already have an account?{' '}
                  <a
                    href="#"
                    className="font-medium text-purple-600 hover:underline"
                  >
                    SignIn here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
