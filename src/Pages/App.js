import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from '../Components/NavBar'
import Home from '../Components/Home'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Portfolio from './Portfolio'
import Skills from '../Components/Skills'


import './Styles/App.css'


class App extends React.Component {
  
  scrollTop = () => {
    window.scrollTo(0,0)
  }
  
  render(){

    return (
      <React.Fragment>
        <NavBar scrollTop={this.scrollTop} />
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        
      </React.Fragment>
    );
  }
}

export default App;
