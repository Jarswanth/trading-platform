import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mt-5">
                    <img src="media/images/largestBroker.svg"/>
                </div>
                <div className="col-6 mt-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mt-4">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className="row mt-4">
                        
                        <div className="col-6 ">
                            <li>Futures and Options</li>
                            <li className="mt-2">Commodity derivatives</li>
                            <li className="mt-2">Currency derivatives</li>

                        </div>
                        <div className="col-6">
                            <li>Stocks & IPOs</li>
                            <li className="mt-2">Direct mutual funds</li>
                            <li className="mt-2">Bonds and Govt.Securities</li>

                        </div>

                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}} className="mt-5"></img>
                </div>

            </div>

        </div>
     );
}

export default Awards;