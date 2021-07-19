import React from 'react'

import './Styles/Project.css'

import Modal from './Modal'


function Portfolio(props) {

    return(
        <div className='project-container'> 
            <div className={'project ' + props.projectClass}>
                <a id='etiqueta' onClick={() => {
                    let modal = document.getElementById('myModal' + props.id);
        
                    modal.style.display='block';
                    modal.classList.add("showModal");
                    props.onModalClick(props.id)
                    }
                } ></a>
                    <Modal id={props.id}>
                        <div className={'modal__project-image' + ' ' + props.projectClass}></div>
                        <div className='modal__text-container'>
                            <p>
                                {props.projectDescription}
                                <br />
                                {props.projectDescription2}
                                <br />
                                {props.projectDescription3}
                            </p>
                        </div>
                        <div className='link-buttons__container'>
                            <div className='project-link button__modal'>
                                <a href={props.projectDeployLink} target='_blank' >
                                    <p className='modal__button_text'>Visit site</p>
                                </a>
                            </div>

                            <div className='gitHub__project-link button__modal'>
                                <a href={props.projectGithubLink} target='_blank'></a>
                            </div>
                        </div>
                    </Modal>
            </div>
        </div>
            
    )
}

export default Portfolio;