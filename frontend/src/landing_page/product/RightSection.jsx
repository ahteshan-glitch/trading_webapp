function RightSection({link,heading,para,a1,arrow}) {
    return ( 
        <div className="container ">
        <div className="row mb-5 mt-3">
            
            <div className="col p-5">
                <h1>{heading}</h1>
                <p className="text-muted fs-8 mb-3">{para}</p>
                <a href="">{a1}{arrow}</a>
                
                
            </div>
            <div className="col p-5">
                <img src={link} alt="" style={{width:"75%"}}/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;