import React from 'react';
import "../Components/comp.css";


const Footer = () => {
  return (
    <div>
    
      
     
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your CINEVERSE. All rights reserved.</p>
          <h3 className=' font  '>ANSH KUMAR</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
