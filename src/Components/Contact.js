import React from 'react'
import './Styles/Contact.css'

class Home extends React.Component{
    render(){
        return(
            <div className='contact'>
                <div className='logos__container'>
                    <div className='linkedin'> <a href="https://www.linkedin.com/in/victor-gea-villa" target='_blank' rel='noreferrer'></a></div>
                    <div className='github'> <a href="http://www.github.com/vpandam" target='_blank' rel='noreferrer'></a></div>
                </div>
            </div>

        );
    }
}

export default Home;