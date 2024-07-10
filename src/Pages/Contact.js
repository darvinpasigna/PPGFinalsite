import '../App.css';
import React from 'react';
import ContactContent from '../Components/ContactContent';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';

const Contact = () => {
    return (
      <>
        <NavBar />
        <div className="background"></div>
        <ContactContent />
        <br /><br />
        <Footer />
      </>
    );
  }
  
  export default Contact;