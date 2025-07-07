import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg border-bottom" style={{position:"fixed",width:"100%",background:"white",marginTop:"0",zIndex:"999"}}>
            <div className="container-fluid">
                <img style={{ width: "10%" }} src="media\images\logo.svg" alt="" className='mx-3' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   
                    <form className="d-flex ms-auto" role="search">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to="/products">Products</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" to="/support">support</Link>
                        </li>
                        
                    </ul>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;