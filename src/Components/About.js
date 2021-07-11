import React from 'react'
import './Styles/About.css'

class About extends React.Component{
    render(){
        return(
            <div className='about'>
                <div className='about__textContainer'>
                    <h1>About me</h1>
                    <p>Hi! Im a frontend developer with a deep passion for technology and programming.
                    I have a constant desire to acquire knowledge and contribute and develop myself as 
                    a professional of the industry.
                    <br />
                    <br />
                    Besides that I play guitar and piano since i was 10 and I love nature and videogames.

                    </p>
                    <div className='download-button'> 
                        <a href='panda.png' download target=''>Download CV</a> 
                        <label className='download-icon'></label>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;