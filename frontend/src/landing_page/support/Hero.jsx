function Hero() {
    return ( 
        <div
      style={{
        backgroundColor: "#387ED1",
        color: "white",
        padding: "60px 20px",
        position: "relative",
      }}
    >
      <a className="mt-5"
        href="#"
        style={{
          color: "white",
          position: "absolute",
          top: "20px",
          right: "30px",
          textDecoration: "underline",
          fontSize: "14px",
          marginRight:"200px"
        }}
      >
        Track Tickets
      </a>

      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8">
            <h4 className="mb-5 " style={{ color: "white" }}>Support Portal</h4>
            <h3 style={{ color: "white" }}>
              Search for an answer or browse help topics
              <br />
              to create a ticket
            </h3>

            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
              style={{
                background: "white",
                borderRadius: "6px",
                padding: "10px 15px",
                color: "#333",
                width: "100%",
                maxWidth: "600px",
                margin: "20px 0",
                border: "none",
              }}
            />

            <div className="mt-3">
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  marginRight: "15px",
                  fontSize: "14px",
                }}
              >
                Track account opening
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  marginRight: "15px",
                  fontSize: "14px",
                }}
              >
                Track segment activation
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  marginRight: "15px",
                  fontSize: "14px",
                }}
              >
                Intraday margins
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  marginRight: "15px",
                  fontSize: "14px",
                }}
              >
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-4 mt-5">
            <h5 className="mt-4" style={{ color: "white" }}>Featured</h5>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "underline",
                display: "block",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              1. Current Takeovers and Delisting - January 2024
            </a>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "underline",
                display: "block",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              2. Latest Intraday leverages - MIS & CO
            </a>
          </div>
        </div>
      </div>
    </div>
     );
}

export default Hero;