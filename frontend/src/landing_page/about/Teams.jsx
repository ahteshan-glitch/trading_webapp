function Teams() {
    return ( 
        <>
        <div className="container ">
            <div className="row text-center mb-5 border-top ">
                <h1 className="mt-5">
                    People
                </h1>
            </div>
            <div className="row">
                <div className="col p-5 text-center">
                    <img src="media\images\nithinKamath.jpg" alt="image" style={{borderRadius:"100%",width:"40%"}} className="mb-5 mx-5 "/>
                    <h5>Nithin Kamath</h5>
                    <p className="text-muted">Founder,CEO</p>
                </div>
                <div className="col p-5 text-muted">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome <br />the hurdles he faced during his decade-long stint as a trader.<br></br> Today, Zerodha has changed the landscape of the Indian broking <br /> industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory <br /> Committee (SMAC) and the Market Data Advisory  Committee <br /> (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" >Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a></p>
                </div>
            </div>
        </div>
        </>
     );
}

export default Teams;