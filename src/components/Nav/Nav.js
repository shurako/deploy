import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <div className = {'Nav'}>
            <div className = {'logo'}>
                Keep<span color = {''}>Fit</span>
            </div>
            <div className = {'nav-bar'}>
                 <div className = {'nav-bar-item'}>LOGOWANIE</div>
                 <div className = {'nav-bar-item'}>KUP KARNET</div>
                 <div className = {'hamburger'}>
                     <div className = {'hamburger-link'}></div>
                     <div className = {'hamburger-link'}></div>
                     <div className = {'hamburger-link'}></div>
                 </div>
                 
            </div>
        </div>
    )
}

export default Nav
