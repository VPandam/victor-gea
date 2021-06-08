import React from 'react'

import './Styles/Project.css'

import Modal from './Modal'


class Portfolio extends React.Component{

    openModal(){
        let modal = document.getElementById('myModal' + this.props.id);
        
        modal.style.display='block';
        this.props.onModalClick(this.props.id)

    }


    render(){
    
        return(

            <div className={'project ' + this.props.projectClass}>
                <a id='etiqueta' onClick={this.openModal.bind(this)} ></a>
                    <Modal id={this.props.id}>
                        <div className={'modal__project-image' + ' ' + this.props.projectClass}></div>
                        <div className='modal__text-container'>
                            <p>{this.props.projectDescription}</p>
                        </div>
                        <div className='link-buttons__container'>
                            <div className='project-link button__modal'>
                                <a href="https://www.google.com" target='_blank'></a>
                            </div>

                            <div className='gitHub__project-link button__modal'>
                                <a href="https://www.github.com" target='_blank'></a>
                            </div>
                        </div>
                    </Modal>
        </div>
                
        )
    }
}

export default Portfolio;