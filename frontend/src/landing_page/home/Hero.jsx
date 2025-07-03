import React from 'react';
import { useNavigate } from 'react-router-dom';
function Hero() {
    const navigate=useNavigate()
        
    
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="/media/images/homeHero.png" alt="no image" className='mb-4' />
                <h1 className='mt-4'>Invest in everything</h1>
                <p className='m-3'>Online platform to invest in stocks,derivatives,mutual funds and many more</p>
                <button className='btn btn-primary mt-2' onClick={()=>navigate('/signup')} style={{ width: "15%", margin: "0 auto" }}>Signup Now</button>
            </div>

        </div>
    );
}

export default Hero;