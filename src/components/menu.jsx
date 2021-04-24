import React from 'react'
import { Link } from 'react-router-dom'

function menu() {
    return (
        <div>    
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Inicio</Link>                        
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/nosotros'>Nosotros</Link>
                            </li>
                        </ul>
                    </div>                    
                </div>
            </nav>        
        </div>
    )
}

export default menu
