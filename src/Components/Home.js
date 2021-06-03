import React from 'react'
import './Styles/Home.css'

class Home extends React.Component{
    render(){
        return(
            <div className='home'>
                <div className='home__textContainer'>
                    <h1>Víctor Gea </h1>
                    <h2>Frontend Developer</h2>
                </div>
            </div>
        );
    }
}

export default Home;