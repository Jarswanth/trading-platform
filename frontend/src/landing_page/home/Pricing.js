import React from 'react';

function Pricing() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h2>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4 border">
                            <img src="media/images/pricing0.svg"></img>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Free account opening</span>
                           
                            
                        </div>
                        <div className="col-4 border">
                            <img src="media/images/pricingEquity.svg"></img>
                            <span className="ml-2">&nbsp;&nbsp;Free equity delivery and &nbsp;&nbsp;direct mutual funds</span>
                        </div>
                        
                        <div className="col-4 border">
                            <img src="media/images/intradayTrades.svg"></img>
                            <span className="ml-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intraday and F&O</span>
                            
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
     );
}

export default Pricing;