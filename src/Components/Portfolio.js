import React from 'react'
import './Styles/Portfolio.css'

class Portfolio extends React.Component{
    render(){
        return(
            <div className='portfolio'>
                <div className='text__container'>
                    <h1>Portfolio</h1>
                </div>
                <div className='project__container'>
                    <div className='project-1'></div>
                    <div className='project-2'></div>
                    <div className='project-3'>  </div>
                    <div className='project-4'></div>
                </div>
            </div>
        );
    }
}

export default Portfolio;