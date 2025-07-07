function Hero() {
    return ( 
        <div className="container ">
            <div className="row  border-bottom" style={{paddingTop:"90px"}}>
                <div className="col text-center mb-5">
                    <h1>
                        Pricing
                    </h1>
                    <p className="text-muted">
                        Free equity investment and flat $20 traday and F&O trades
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col p-5 text-center">
                    <img src="media\images\pricingEquity.svg" alt="" />
                    <h2>Free equity delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-5 text-center">
                     <img src="media\images\intradayTrades.svg" alt="" />
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col p-5 text-center">
                    <img src="media\images\pricingEquity.svg" alt="" />
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;