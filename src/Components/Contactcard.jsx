import React from 'react';

import { Link } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Contactcard = (props) => {
    const {id ,name ,email } = props.contact;
    return (
            <div className=' item'>
                <img className = 'ui avatar image' src={user} alt = 'user' />
                <Link to = "/">
                    <div className='content'>
                        <div className='header'>{name}</div>
                        <div>{email}</div>
                    </div>
                </Link>
                
                <br />
                <br />
                <i className='trash alternate outline icon' style={{color : 'red' ,marginTop : '7px'}}></i>
            </div>
    );
}

export default Contactcard;
