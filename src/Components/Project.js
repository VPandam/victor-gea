import React from 'react'

import './Styles/Project.css'


class Portfolio extends React.Component{

    openModal(){
        let modal = document.getElementById('myModal' + this.props.id);
        let btn = document.getElementById('myBtn');

        
        modal.style.display='block';
        

    }

    // When the user clicks on <span> (x), close the modal
    closeModal() {
        let modal = document.getElementById('myModal' + this.props.id); 

        modal.style.display = "none";
    
    }   

  
  // When the user clicks anywhere outside of the modal, close it
  // Id of the project needs to be declared for this code to work
    componentDidMount(){
        let modal1 = document.getElementById('myModal1')
        let modal2 = document.getElementById('myModal2')
        let modal3 = document.getElementById('myModal3')
        let modal4 = document.getElementById('myModal4')

        
        
        window.onclick = function(event) {

            if(event.target == modal1 || event.target == modal2
                || event.target == modal3 || event.target == modal4){
                modal1.style.display = "none";
                modal2.style.display = "none";
                modal3.style.display = "none";
                modal4.style.display = "none";

            }

            
        }
    }


    render(){



        return(

            <div className={'project ' + this.props.projectClass}>
                <a onClick={this.openModal.bind(this)} ></a>

                <div id={'myModal' + this.props.id} className="modal">

                <div className="modal-content">
                    <span onClick={this.closeModal.bind(this)} className="close">&times;</span>
                    
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