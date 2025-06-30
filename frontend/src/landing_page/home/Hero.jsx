import React from 'react';
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="/media/images/homeHero.png" alt="no image" className='mb-4' />
                <h1 className='mt-4'>Invest in everything</h1>
                <p className='m-3'>Online platform to invest in stocks,derivatives,mutual funds and many more</p>
                <button className='btn btn-primary mt-2' style={{ width: "15%", margin: "0 auto" }}>Signup Now</button>
            </div>

        </div>
    );
}

export default Hero;