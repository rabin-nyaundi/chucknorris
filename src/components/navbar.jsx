import React, { Component } from 'react';

const Navbar = () => {
    return ( 
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary"></span>
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                </ul>
    
            </div>
        </nav>
     );
}
 
export default Navbar;