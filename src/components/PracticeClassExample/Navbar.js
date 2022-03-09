import React ,{Component} from 'react';

function Navbar(){
    return(
        <div className="topnav">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div className="topnav-right">
                <a href="#search">Search</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Navbar;