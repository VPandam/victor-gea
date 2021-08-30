import React, {useState} from 'react'
import './NavBar.css'
import NavBarLi from './NavBarLi/NavBarLi'

import {Link} from 'react-scroll'
export default function NavBar (){
    

    const [clicked, setClicked] = useState({clicked: false})

    const handleClick = () => {
        setClicked({clicked: !clicked.clicked})
    }

    const handleClickLi = () => {
        setClicked({clicked:false})
    } 

    
    return (
        <React.Fragment>

            <div className='navBar'>
                
                <div className='button-menu'
                    onClick={handleClick} >
                </div>

                <div className='button-up'> <Link to='home' spy={true} smooth={true}>
                    </Link>
                </div>
                     
                <ul className={clicked.clicked ?'navBar__list-clicked' : 'navBar__list' }> 

                    <NavBarLi handleClickLi={handleClickLi} to='home'> Home</NavBarLi>
                    <NavBarLi handleClickLi={handleClickLi} to='about'> About me</NavBarLi>
                    <NavBarLi handleClickLi={handleClickLi} to='skills__textContainer'> Skills</NavBarLi>
                    <NavBarLi handleClickLi={handleClickLi} to='portfolio'> Portfolio</NavBarLi>
                    <NavBarLi handleClickLi={handleClickLi} to='contact'> Contact</NavBarLi>
                    
                </ul>          
            </div>
        </React.Fragment>
    );
   }
