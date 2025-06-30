import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (


        <nav class="navbar navbar-expand-lg border-bottom">
            <div class="container-fluid">
                <img style={{ width: "10%" }} src="media\images\logo.svg" alt="" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    <form class="d-flex ms-auto" role="search">
                        
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-3">
                            <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link active" to="/about">About</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link active" to="/products">Products</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link active" to="/support">support</Link>
                        </li>
                        
                    </ul>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;