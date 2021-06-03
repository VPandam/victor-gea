import React from 'react'
import './Styles/NavBar.css'
import Panda from '../Images/panda.png'

import {Link} from 'react-scroll'
class NavBar extends React.Component{
   render() {
    return (
        <React.Fragment>

            <div className='NavBar'>
                    <ul className='NavBar__list'>
                    <li className='NavBar__list-li'><Link  to="home" spy={true} smooth={true}>Home</Link></li>
                    <li className='NavBar__list-li'><Link  to="about" spy={true} smooth={true} >About me</Link></li>
                    <li className='NavBar__list-li'><Link  to="skills" spy={true} smooth={true} >Skills</Link></li>
                    <li className='NavBar__list-li'><Link  to="portfolio" spy={true} smooth={true} >Portfolio</Link></li>
                    <li className='NavBar__list-li'><Link  to="contact" spy={true} smooth={true} >Contact</Link></li>
                </ul>          
            </div>
        </React.Fragment>
    );
   }
}

export default NavBar;