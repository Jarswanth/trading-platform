import React from 'react';
function Hero() {
    return ( 
        <div className="container  mt-5">
            <div className="row ">
                <div className="col text-center">
                    <h4>Charges</h4>
                    <h5>List of all charges and taxes</h5>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <img src="/media/images/pricing0.svg" style={{width:"55%"}}></img>
                        <h3>Free equity delivery</h3>
                        <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                    </div>
                    <div className="col text-center">
                        <img src="/media/images/intradayTrades.svg" style={{width:"55%"}}></img>
                        <h3>Intraday and F&O trades</h3>
                        <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                    </div>
                    <div className="col text-center">
                        <img src="/media/images/pricing0.svg" style={{width:"55%"}}></img>
                        <h3>Free direct MF</h3>
                        <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                    </div>

                </div>
                <div className="container p-5">
            <div className="row text-center">
                <h1 className="mt-5">Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="btn btn-primary my-3"style={{width:"15%",margin:"0 auto"}}>Signup Now</button>
                

            </div>
                 
        </div>

            </div>

        </div>
     );
}

export default Hero;