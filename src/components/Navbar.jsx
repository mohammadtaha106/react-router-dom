import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Avatar } from '@nextui-org/react';

const Navbar = () => {
  const {user , setuser} = useContext(AuthContext)
  console.log(user?.isLogin); // Should print true if the user is logged in
console.log(user?.userInfo?.photourl); // Should print the photo URL if it exists

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
          user?.isLogin ?(<Avatar src={user?.userInfo?.photourl} size='md'/>)  : ( < Link to="/auth/signin" className="text-white hover:text-purple-300 transition duration-300">Sign In</Link>)
         
                 }
                 

    
      </div>
      
    </nav>
  );
};

export default Navbar;
