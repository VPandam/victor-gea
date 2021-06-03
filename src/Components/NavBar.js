import React from 'react'
import './Styles/NavBar.css'
import Panda from '../Images/panda.png'

import {Link} from 'react-scroll'
class NavBar extends React.Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    
    render() {
    return (
        <React.Fragment>

            <div className='navBar'>
                
                    <button className={this.state.clicked ?'button-menu-clicked' : 'button-menu' } 
                    onClick={this.handleClick} ></button>
                
                <ul className={this.state.clicked ?'navBar__list-clicked' : 'navBar__list' }> 
                    <li className='navBar__list-li'>
                        <Link to="home" spy={true} smooth={true}>
                            Home</Link></li>

                    <li className='navBar__list-li'>
                        <Link to="about" spy={true} smooth={true} >
                            About me</Link></li>

                    <li className='navBar__list-li'>
                        <Link to="skills" spy={true} smooth={true}  offset={-100} >
                            Skills</Link></li>

                    <li className='navBar__list-li'>
                        <Link to="portfolio" spy={true} smooth={true} >
                            Portfolio</Link></li>
                    <li className='navBar__list-li'>
                        <Link to="contact" spy={true} smooth={true} >
                            Contact</Link></li>
                </ul>          
            </div>
        </React.Fragment>
    );
   }
}

export default NavBar;