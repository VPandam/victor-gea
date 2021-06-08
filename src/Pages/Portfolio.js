import React from 'react'
import './Styles/Portfolio.css'
import Project from '../Components/Project'

class Portfolio extends React.Component{


    componentDidMount(){
        let modals = document.getElementsByClassName("modal");
        console.log(modals);

         // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
                
            for (let index = 0; index < modals.length; index++) {
                if(event.target == modals[index]){
                    event.target.style.display = 'none';
                }
                
            } 
           
        }
        
 
    }

    onModalClick(id){
        let modal = document.getElementById("myModal" + id );
        let closeSpan = document.getElementById('close-modal-span' + id)

         // When the user clicks anywhere outside of the modal or in the close labgel, close the modal.
        window.onclick = function(event) {
            
            if(event.target == modal || event.target == closeSpan){
                
                modal.style.display = 'none';
            }
        }
    }

    render(){
        return(
            
            <div className='portfolio'>

                <div className='text__container'>
                    <h1>Portfolio</h1>
                </div>

                <div className='project__container'>
                    
                    <Project 
                        projectClass='mobile-first'
                        projectDescription='Its the website of Batatabit, an app that let you buy and compare crypto. 
                        In the website you can consult the different plans, whatch graphics and learn about
                        what the app offers you.
                        This is a project i made for learning html and css.
                        Its part of the frontend developer school in platzi, an online academy.'
                        id = '1'
                        onModalClick = {this.onModalClick}
                        
                    />                  
                    <Project
                        projectClass='space-man'
                        projectDescription='Its a very simple game made for learning Unity with C#. I learnt
                        about object oriented programming and rendering in real time.'
                        id = '2'
                        onModalClick = {this.onModalClick}
                    />
                    <Project 
                        id = '3'
                        onModalClick = {this.onModalClick}
                    />              
                    <Project 
                        id = '4' 
                        onModalClick = {this.onModalClick}
                    />              
                </div>
                
            </div>
        );
    }
}

export default Portfolio;