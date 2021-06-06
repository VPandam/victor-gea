import React from 'react'
import './Styles/About.css'

class About extends React.Component{
    render(){
        return(
            <div className='about'>
                <div className='about__textContainer'>
                    <h1>About me</h1>
                    <p>Hi! Im a frontend developer looking for a job where i can 
                    contribute and develop myself as a professional of the industry
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