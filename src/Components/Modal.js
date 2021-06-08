import React from 'react'
import reactDom from 'react-dom'

function Modal (props){
    return(
        reactDom.createPortal(
            <div id={'myModal' + props.id} className="modal">

                <div className="modal-content">
                    <span id={'close-modal-span' + props.id} className="close">&times;</span>
                    
                    <div className='modal-content__flex'>
                        {props.children}
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        )
    )
}

export default Modal;