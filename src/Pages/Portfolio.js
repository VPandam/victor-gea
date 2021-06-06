import React from 'react'
import './Styles/Portfolio.css'
import Project from '../Components/Project'

class Portfolio extends React.Component{

    state = {modalId: 0}

    handleClick(e){
        this.setState({modalId: e.target.nextElementSibling})
    }



    render(){
        return(
            
            <div className='portfolio'>

                <div className='text__container'>
                    <h1>Portfolio</h1>
                </div>

                <div className='project__container'>
                    <div onClick={this.handleClick.bind(this)}>
                        <Project 
                            projectClass='mobile-first'
                            projectDescription='Its the website of Batatabit, an app that let you buy and compare crypto. 
                            In the website you can consult the different plans, whatch graphics and learn about
                            what the app offers you.
                            This is a project i made for learning html and css.
                            Its part of the frontend developer school in platzi, an online academy.'
                            id = '1'
                            
                        />
                    </div>
                    
                    <Project
                        projectClass='space-man'
                        projectDescription='Its a very simple game made for learning Unity with C#. I learnt
                        about object oriented programming and rendering in real time.'
                        id = '2'
                    />
                    <Project id = '3'/>              
                    <Project id = '4' />              
                </div>
                
            </div>
        );
    }
}

export default Portfolio;