import React from 'react';
import {Link} from 'react-scroll'

export default function NavBarLi (props){
    return (
        <li className='navBar__list-li'>
            <Link onClick={props.handleClickLi} to={props.to} spy={true} smooth={true}>
                <label className='navBar__Label'>{props.children}</label> 
            </Link>
        </li>
    )
}
