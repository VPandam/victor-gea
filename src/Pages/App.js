import React from 'react';

import NavBar from '../Components/NavBar/NavBar'
import Home from '../Components/HomeV/Home'
import Contact from '../Components/Contact/Contact'
import About from '../Components/About/About'
import Portfolio from './Portfolio'
import Skills from '../Components/Skills/Skills'


import './Styles/App.css'


export default function App (){
  
  const scrollTop = () => {
    window.scrollTo(0,0)
  }


    return (
      <React.Fragment>
        <NavBar scrollTop={scrollTop} />
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        
      </React.Fragment>
    );

}


