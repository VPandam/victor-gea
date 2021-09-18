import React from 'react'
import './Home.css'
import me from '../../Images/yo2.jpeg'

export default function Home (){

    return(
        <div className='home'>
            <div className='home-container'>
                <div className="img-container">
                    <img src={me} alt="" />
                </div>
                
                <div className='home__textContainer'>
                    <h1>Victor Gea </h1>
                    <h2>Frontend Developer</h2>
                </div>
            </div>
           

            
        </div>
    );
    
}

