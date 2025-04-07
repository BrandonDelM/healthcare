import React from 'react';
import './navbar.css';

export default function Navbar(){
    return(
        <div className="background">
            <div className="text">
                <p className="left-text">Ease of Health</p>
                <div className="right-text">
                    <ul>
                        <li>Home</li>
                        <li>Finder</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}