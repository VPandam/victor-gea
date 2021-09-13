import React from 'react'
import './Styles/Portfolio.css'
import Project from '../Components/ProjectsV/Project'

export default function Portfolio (){
    
    
    const onModalClick = (id) => {
        let modal = document.getElementById("myModal" + id );
        let closeSpan = document.getElementById('close-modal-span' + id)

         // When the user clicks anywhere outside of the modal or in the close labgel, close the modal.
        window.onclick = function(event) {
            
            if(event.target === modal || event.target === closeSpan){
                
                modal.style.display = 'none';
            }
        }
    }

    //Alternative function for closing modals
    // componentDidMount(){
    //     let modals = document.getElementsByClassName("modal");
    //     console.log(modals);

    //      // When the user clicks anywhere outside of the modal, close it
    //     window.onclick = function(event) {
                
    //         for (let index = 0; index < modals.length; index++) {
    //             if(event.target == modals[index]){
    //                 event.target.style.display = 'none';
    //             }
                
    //         } 
           
    //     }
        
 
    // }



    return(
        
        <div className='portfolio'>

            <div className='text__container'>
                <h1>Portfolio</h1>
            </div>

            <div className='project__container'>
            <Project 
                    id = '3'
                    projectClass='rick-and-morty'
                    projectDescription='It is a Rick and Morty memory game made with JavaScript using 
                    React and the Rick and Morty API.'
                    projectDescription2=' When the game starts, the API is called and gets photos of 
                    random characters in the series.
                    Making this game i learnt about CSS animation and API calling.'
                    onModalClick = {onModalClick}
                    projectDeployLink = 'https://rick-morty-memo.netlify.app'
                    projectGithubLink = 'https://github.com/VPandam/rick-and-morty-memo'
                />  
                
                <Project
                    projectClass='jap'
                    projectDescription='With this website you can practice japanese hiragana and katakana, its made with React using
                    random API.'
                    id = '2'
                    onModalClick = {onModalClick}
                    projectDeployLink = 'https://jap-learning.netlify.app'
                    projectGithubLink = 'https://github.com/VPandam/Japanese-learning'
                />
                <Project 
                    id = '4' 
                    onModalClick = {onModalClick}
                    projectClass='badges'
                    projectDescription='A badge management system made with ReactJS.'
                    projectDescription2='The API is made with Java Spring, allows you to create, read, update 
                    and delete badges.' 
                    projectDescription3='The API and the DB are deployed in heroku so it takes a while to load
                    the first time.'
                    projectDeployLink = 'https://badge-management.netlify.app/'
                    projectGithubLink = 'https://github.com/VPandam/Badge-Management-System'
                    additionalLink = 'https://github.com/VPandam/Badges-API'
                />

                                
                
                <Project 
                    projectClass='mobile-first'
                    projectDescription='The website of Batatabit, in this web you can 
                    consult the different plans, watch graphics and learn about
                    what the app offers you.
                    This is a project i made for learning html, css and responsive design. 
                    Its part of the frontend developer school in platzi, an online academy.'
                    id = '1'
                    onModalClick = {onModalClick}
                    projectDeployLink = 'https://wonderful-mcclintock-aa79d0.netlify.app/'
                    projectGithubLink = 'https://github.com/VPandam/Mobile-first'
    

                />              
                                
            </div>
            
        </div>
    );
    
}

