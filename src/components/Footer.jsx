import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-gray-800 text-white p-4 animate-bounce text-center'>
   <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
   </footer>
  );
}





export default Footer