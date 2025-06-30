function LeftSection({link,heading,para,a1,a2,arrow,logo1,logo2}) {
    return ( 
        <div className="container ">
            <div className="row mb-5 mt-3">
                <div className="col p-5">
                    <img src={link} alt="" style={{width:"75%"}}/>
                </div>
                <div className="col p-5">
                    <h1>{heading}</h1>
                    <p className="text-muted fs-8 mb-3">{para}</p>
                    <a href="">{a1}{arrow}</a>
                    <a href="" className="mx-5">{a2}{arrow}</a><br />
                    <img src={logo1} alt="" className="mt-3"/>
                    <img src={logo2} alt="" className="mx-3 mt-3"/>
                </div>
            </div>
        </div>
     );
}

export default LeftSection ;