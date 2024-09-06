import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Avatar } from '@nextui-org/react';
import AvatarDrop from './Avatardrop';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const {user , setuser} = useContext(AuthContext)

  
  const notify = () => toast.error("Log Out Sucessfully",{position: "top-center",
    autoClose: 2000,});

  const handleLogOut =()=>{
    signOut(auth).then(() => {
 console.log("sign out successfully");
 notify()
 
    }).catch((error) => {
      console.log(error);
      
    });
    
  }
  //{(<Avatar src={user?.userInfo?.photourl} size='md'/>)}

// console.log(user?.userInfo?.photourl);
// console.log(userInfo?.displayName);

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-purple-700 shadow-md">
      <div className="text-3xl font-extrabold text-white">
        <span style={{ fontFamily: 'Cursive, sans-serif' }}>&lt;MUSA /&gt;</span>
      </div>
      <div className="flex space-x-8 text-lg font-medium">
        < Link to="/" className="text-white hover:text-purple-300 transition duration-300">Home</Link>
       
        < Link to="about" className="text-white hover:text-purple-300 transition duration-300">About Us</Link>
        < Link to="contact" className="text-white hover:text-purple-300 transition duration-300">Contact Us</Link>
        {
          user?.isLogin ? <AvatarDrop onclick={handleLogOut} img={user?.userInfo?.photourl} name ={user?.userInfo?.name} email ={user?.userInfo?.email} /> : ( < Link to="/auth/signin" className="text-white hover:text-purple-300 transition duration-300">Sign In</Link>)
         
                 }
                 

    
      </div>
      
    </nav>
  );
};

export default Navbar;
