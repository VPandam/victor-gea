import React from 'react'
import './Styles/NavBar.css'

import {Link} from 'react-scroll'
class NavBar extends React.Component{
    
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }

    handleClickLi = () => {
        this.setState({clicked:false})
    } 
    handleClickLi = () => {
        this.setState({clicked:false})
    } 
    
    render() {
    return (
        <React.Fragment>

            <div className='navBar'>
                
                <div className={this.state.clicked ?'button-menu-clicked' : 'button-menu' } 
                    onClick={this.handleClick} ></div>
                <div className='button-up'> <Link to='home' spy={true} smooth={true}></Link></div>
                    
                
                <ul className={this.state.clicked ?'navBar__list-clicked' : 'navBar__list' }> 
                    <li className='navBar__list-li'>
                        <Link onClick={this.handleClickLi} to="home" spy={true} smooth={true}>
                            <label className='navBar__Label'>Home</label> </Link></li>

                    <li className='navBar__list-li'>
                        <Link onClick={this.handleClickLi} to="about" spy={true} smooth={true} >
                            <label className='navBar__Label'>About me</label></Link></li>

                    <li className='navBar__list-li'>
                        <Link onClick={this.handleClickLi} to="skills" spy={true} smooth={true}  offset={-100} >
                            <label className='navBar__Label'>Skills</label></Link></li>

                    <li className='navBar__list-li'>
                        <Link onClick={this.handleClickLi} to="portfolio" spy={true} smooth={true} >
                        <label className='navBar__Label'>Portfolio</label></Link></li>
                    <li className='navBar__list-li'>
                        <Link onClick={this.handleClickLi} to="contact" spy={true} smooth={true} >
                            <label className='navBar__Label'>Contact</label></Link></li>
                </ul>          
            </div>
        </React.Fragment>
    );
   }
}

export default NavBar;