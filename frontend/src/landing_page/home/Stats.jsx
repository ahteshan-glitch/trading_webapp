import React from 'react';
function Stats() {
    return (
        <div className='container mt-5 p-4'>
            <div className='row mt-5 mb-5'>
                <div className='col-6'>
                    <h1 className='mb-4'>Trust with confidence</h1>

                    <h2 className='mb-3'>Customer first always</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='mb-3'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='mb-3'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src="media\images\ecosystem.png" alt="image" style={{ width: "75%" }} className='mx-5' />
                    <div>
                        <a style={{ textDecoration: "none" }} href='' className='mx-5'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a style={{ textDecoration: "none" }} href='www.youtube.com' className='mx-5'>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stats;