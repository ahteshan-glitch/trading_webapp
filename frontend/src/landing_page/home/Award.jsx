import React from 'react';

function Award() {
    return (
        <div className='container mt-5 mb-5'>

            <div className='row'>

                <div className='col-6'><img src="media/images/largestBroker.svg" alt="image" /></div>
                <div className='col-6 '>
                    <h1 className='mb-3'>
                        Largets stock broker in India
                    </h1>
                    <p className='mb-5'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className='row '>

                        <div className='col-6 mb-4'>
                            <ul>
                                <li className='mb-4'>
                                    Futures and options
                                </li>
                                <li className='mb-4'>
                                    Commodity derivatives
                                </li>
                                <li>
                                    Currency derivatives
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 mb-4'>
                            <ul>
                                <li className='mb-4'>
                                    Stocks and IPOs
                                </li>
                                <li className='mb-4'>
                                    Direct mutual funds
                                </li>
                                <li>
                                    Bonds and government security
                                </li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="logos" />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Award;