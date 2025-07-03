import { useNavigate } from "react-router-dom";
function Universe() {
    const navigate = useNavigate();
     
    return ( 
        <div className="container mt-5  mb-5">
            <div className="row text-center ">
                <div className="col">
                    <p>Want to know more about our technology stack? check out Zerodha.tech blog.</p>
                    <br />
                    <h1>The Zerodha Universe</h1>
                    <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
                </div>

            </div>
            <div className="row text-center mt-5">
                <div className="col text-muted">
                    <img src="media\images\smallcaseLogo.png" alt="" style={{width:"40%"}} className="mb-2"/>
                    <p>Thematic investment platform</p>
                </div>
                <div className="col text-muted">
                <img src="media\images\streakLogo.png" alt="" style={{width:"40%"}} className="mb-2"/>
                    <p>Algo & strategy platform</p>
                </div>
                <div className="col text-muted">
                <img src="media\images\sensibullLogo.svg" alt="" style={{width:"40%"}} className="mb-2"/>
                    <p>Options trading platform</p>
                </div>
            </div>
            <div className="row text-center mt-5 mb-5">
                <div className="col text-muted">
                    <img src="media\images\zerodhaFundhouse.png" alt="" style={{width:"40%"}} className="mb-2"/>
                    <p>Asset management</p>
                </div>
                <div className="col text-muted">
                <img src="media\images\goldenpiLogo.png" alt="" style={{width:"40%"}} className="mb-2"/>
                    <p>Bonds trading platform</p>
                </div>
                <div className="col text-muted">
                <img src="media\images\dittoLogo.png" alt="" style={{width:"40%"}} className="mb-2"/>
                    <p>Insurance</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mb-5">
                <button onClick={()=>navigate('/signup')} className='btn btn-primary mt-2' style={{ width: "15%", margin: "0 auto" }}>Signup Now</button>
                </div>
                
            </div>
        </div>
     );
}

export default Universe;

            
            