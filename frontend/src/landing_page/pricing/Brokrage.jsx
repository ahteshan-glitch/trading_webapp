function Brokraeg() {
    return ( 
        <div className="container border-top mt-5">
            <div className="row mt-5 mb-5">
                <div className="col ">
                        <h4 className="text-center mb-4" style={{color:"#387ed1"}}>Brokrage calculator</h4>
                        <ul className="text-muted " style={{fontSize:"14px"}}>
                            <li className="mb-3 ">Call & Trade and RMS auto-squared: Additional charges of ₹50 + GST per order.</li>
                            <li className="mb-3 ">Digital contract notes will be sent via e-mail.</li>
                            <li className="mb-3 ">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                            <li className="mb-3 ">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                            <li className="mb-3 ">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)</li>
                            <li className="mb-3 ">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                        </ul>
                </div>
                <div className="col mb-5" style={{color:"#387ed1"}}>
                    <h4 className="text-center">List of charges</h4>
                </div>
            </div>
        </div>
     );
}

export default Brokraeg;