import '../App.css';
import React from 'react';
import Aboutcontent from '../Components/Aboutcontent';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
const About = () => {
    return (
      <>
        <NavBar />
        <div className="background"></div>
        <Aboutcontent/>
        <Footer/>
      </>
    );
  }
  
  export default About;