import React from 'react';
function Footer() {
    return ( 
        <footer style={{background:"rgb(240,240,240)"}}>
        <div className='container border-top pb-3' > 
                <div className='row mt-4'>
                    <div className='col'>
                    <img style={{ width: "50%" }} src="media\images\logo.svg" alt="" className='mt-3 mb-3' />
                    <p className='mt-3 mb-4'>
                    Ⓒ 2010 - 2024 Not Zerodha  Broking Ltd. <br></br>
                    All rights reserved
                    </p>
                    <p >
                    <i class="fa-brands fa-twitter mx-3" ></i>
                    <i class="fa-brands fa-facebook mx-3"></i>
                    <i class="fa-brands fa-square-instagram mx-3"></i>
                    <i class="fa-brands fa-linkedin-in mx-3"></i>
                    <i class="fa-brands fa-telegram mx-3"></i>
                    </p>
                    </div>
                    <div className='col'>
                        <p>Company</p>
                            <a  href='' className='text-muted '>About</a><br></br><br />
                            <a  href='' className='text-muted '>Product</a><br></br><br />
                            <a  href='' className='text-muted '>Pricing</a><br></br><br />
                            <a  href='' className='text-muted '>Refferal program</a><br></br><br />
                            <a  href='' className='text-muted '>Carers</a><br></br><br />
                            <a  href='' className='text-muted '>Zerodha tech</a><br></br><br />
                            <a  href='' className='text-muted '>Press & media</a><br></br><br />
                            <a  href='' className='text-muted '>Zerodha cares (CSR)</a><br></br><br />
                        
                    </div>
                    <div className='col'>
                        <p>Support</p>
                       <a href="" className='text-muted '>Contact</a><br></br><br />
                       <a href="" className='text-muted '>Support portal</a><br></br><br />
                       <a href="" className='text-muted '>Z-Connect blog</a><br></br><br />
                       <a href="" className='text-muted '>List of charges</a><br></br><br />
                       <a href="" className='text-muted '>Downloads & resources</a><br></br><br />
                    </div>
                    <div className='col'><p>Account</p>
                    <a href="" className='text-muted '>Open an account</a><br></br><br />
                    <a href="" className='text-muted '>Fund transfer</a><br></br><br />
                    <a href="" className='text-muted '>60 days of challange</a><br></br><br />
                    </div>
                </div>
                <div className='mt-4  text-muted' style={{fontSize:"15px"}}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p className='mb-0'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
        </div>
        </footer>
     );
}

export default Footer;