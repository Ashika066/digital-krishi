import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1
          style={{
            fontWeight: "700",
            fontSize: "2.7rem",
            lineHeight: "1.15",
            marginBottom: "15px",
            letterSpacing: "0.5px",
          }}
        >
          #1 FREE app for crop
          <br />
          diagnosis and treatments
        </h1>
        <div
          className="mb-5"
          style={{ display: "flex", justifyContent: "center", gap: "16px" }}
        >
          <button
            className="p-2 btn fs-5"
            style={{
              color: "#1976d2",
              border: "1px solid #1976d2",
              width: "155px",
            }}
          >
            Find Products
          </button>
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "235px" }}
          >
            Download DigitalKrishi
          </button>
        </div>
      </div>

      <section style={{marginTop: "7rem", marginRight: "2rem", marginLeft: "2rem"}}>
        <div className="container">
          <div
            className="row justify-content-center position-relative"
            style={{
              minHeight: "420px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              className="d-flex w-100"
              style={{ gap: "0", justifyContent: "space-between" }}
            >
              <div style={{ flex: "0 0 66%", height: "450px" }}>
                <img
                  src="media/images/homeHero.png"
                  alt="Farmer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "24px",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ flex: "0 0 32%", height: "450px" }}>
                <img
                  src="media/images/homeHeroSide.png"
                  alt="Phone in hand"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "24px",
                    display: "block",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                inset: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                zIndex: 3,
              }}
            >
              <img
                src="media/images/homeHeroUp.png"
                alt="App preview"
                style={{
                  width: "300px",
                  transform: "translateY(3%)",
                  filter: "drop-shadow(0 14px 28px rgba(0,0,0,.22))",
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "10rem" }}>
            <p style={{ fontSize: "1.25rem", marginBottom: "3rem" }}>
              DigitalKrishi helps farmers diagnose and treat crop problems,
              <br />
              improve productivity and provide farming knowledge. <br />
              Achieve your farming goals and improve your agricultural <br />
              experience with DigitalKrishi.
            </p>
            <p style={{ color: "#6c757d", margin: 0 }}>
              Trusted by largest agricultural community
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
