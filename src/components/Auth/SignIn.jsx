import React from 'react';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



function SignIn() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()
  const notify = () => toast.success("Signed In Sucessfully",{position: "top-center",
    autoClose: 2000,});
    const handleredirect = (result)=>{
      if (result.operationType === "signIn") {
        navigate('/')
      }
     
    }

 const handlesigninwithgoogle =()=> {

  const provider = new GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log("result=>",result);
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user=>",user);
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    notify()

    handleredirect(result)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error=>",errorCode,errorMessage);
    
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

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
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-purple-900 md:text-3xl dark:text-gray-800">
                Sign In Here
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

                  onChange={(e)=>setEmail(e.target.value)}

                  value={email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
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

                  onChange={(e)=> setPassword(e.target.value)}

                  value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                >
                  Sign In
                </button>
                <button
  type="button"
  class="flex items-center justify-center w-full p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
  onClick={()=> {handlesigninwithgoogle()} }
  
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    class="mr-2"
    viewBox="0 0 16 16"
  >
    <path d="M8 0c1.578 0 2.866.488 3.81 1.32L9.623 4.508C9.145 4.187 8.636 4.064 8 4.064c-1.676 0-3.042 1.136-3.542 2.664-.338.983-.157 1.919.52 2.652.67.721 1.574 1.058 2.61.979.839-.066 1.528-.341 2.11-.827.41-.347.693-.781.82-1.283H8.18V6.49H13.9c.1.624.152 1.276.152 1.936 0 1.609-.546 2.974-1.467 3.933C11.282 13.758 9.77 14.5 8 14.5c-2.594 0-4.644-1.74-5.418-4.064C2.134 8.796 2 8.404 2 8s.134-.796.582-2.436C3.356 3.24 5.406 1.5 8 1.5c1.176 0 2.207.366 3.005.977l2.433-2.364C12.63.358 10.393 0 8 0z" />
  </svg>
  Sign in with Google
</button>
<ToastContainer />

                <p className="text-lg font-light text-gray-500">
                  Don't have an account?{' '}
                  <a
                    href="#"
                    className="font-medium text-purple-600 hover:underline"
                  >
                    Click here to Sign Up and create an account
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

export default SignIn;
