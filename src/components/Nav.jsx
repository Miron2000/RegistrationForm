import React from 'react';


function Nav(props) {
    return (
        <div className='navbar'>
            {props.children}
        </div>
    )
}

export default Nav;