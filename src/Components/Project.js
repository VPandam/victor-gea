import React from 'react'

import './Styles/Project.css'


class Portfolio extends React.Component{

    openModal(){
        let modal = document.getElementById('myModal' + this.props.id);
        let btn = document.getElementById('myBtn');

        
        modal.style.display='block';
        this.props.onModalClick(this.props.id)
        

    }

    // When the user clicks on <span> (x), close the modal
    // closeModal() {
    //     let modal = document.getElementById('myModal' + this.props.id); 

    //     modal.style.display = "none";
    
    // }   

  componentDidMount(){
    

  }
  


    render(){

        

        return(

            <div className={'project ' + this.props.projectClass}>
                <a id='etiqueta' onClick={this.openModal.bind(this)} ></a>
                <div id={'myModal' + this.props.id} className="modal">

                <div className="modal-content">
                    <span id={'close-modal-span' + this.props.id} className="close">&times;</span>
                    
                    <div className='modal-content__flex'>
                        
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

                    </div>
                    
                </div>

            </div>

            </div>
        )
    }
}

export default Portfolio;