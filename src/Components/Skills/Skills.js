import React from 'react'
import './Skills.css'

export default function Skills (){

    return(
        <div className='skills'>
            <div className='skills__textContainer'>
                <h1>Skills</h1>
            </div>
            <div className='skills__iconContainer'>

                <div className='html'></div>
                <div className='css'></div>
                <div className='js'></div>
                <div className='responsive'></div>
                
                <br/>
                <div className='react'></div>
                <div className='npm'></div>
                <div className='git'></div>
                <div className='terminal'></div>
                
                <br/>
                <div className='java'></div>
                <div className='spring'></div>
                <div className='postgres'></div>
                <div className='csharp'></div>
                

            </div>
        </div>
    );

}

