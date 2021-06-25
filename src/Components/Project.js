import React from 'react'

import './Styles/Project.css'

import Modal from './Modal'


function Portfolio(props) {

    return(

        <div className={'project ' + props.projectClass}>
            <a id='etiqueta' onClick={() => {
                let modal = document.getElementById('myModal' + props.id);
    
                modal.style.display='block';
                props.onModalClick(props.id)
                }
            } ></a>
                <Modal id={props.id}>
                    <div className={'modal__project-image' + ' ' + props.projectClass}></div>
                    <div className='modal__text-container'>
                        <p>{props.projectDescription}</p>
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
            
    )
}

export default Portfolio;