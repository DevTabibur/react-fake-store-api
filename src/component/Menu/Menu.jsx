import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Menu.css'

const Menu = (props) => {
    return (
        <>
            <div className=' sticky-top bg-light'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-4">Logo</div>
                    <div className="col-md-10">
                        <ul className="menu-container">
                            <li className='list-items ms-2 p-4'>HOME</li>
                            <li className='list-items ms-2 p-4'>CONTACT</li>
                            <li className='list-items ms-2 p-4'>CART <small><sup>{props.count}</sup></small>  </li>
                            <li className='list-items ms-2 p-4'>LOGIN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Menu;