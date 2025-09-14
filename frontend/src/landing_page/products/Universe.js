import React from 'react';
function Universe() {
    return ( 
        <div class="container mt-5">
            <div class="row text-center ">
            <h4>The Zerodha Universe</h4>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className="row text-center p-5 text-muted"> 
                <div className="col">
                    <img src="/media/images/zerodhaFundhouse.png" style={{width:"50%"}}></img>
                   
                    <p className="mt-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col">
                <img src="/media/images/sensibullLogo.svg" style={{width:"50%"}}></img>
                <br></br>
                    <p className="mt-4">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col">
                    <img src="/media/images/zerodhaFundhouse.png" style={{width:"50%"}}></img>
                    <p className="mt-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

            </div>
            <div className="row text-center p-4 text-muted">
                <div className="col">
                    <img src="/media/images/streakLogo.png" style={{width:"50%"}}></img>
                    <p className="mt-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col">
                    <img src="/media/images/smallcaseLogo.png" style={{width:"50%"}}></img>
                    <p className="mt-4">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col">
                    <img src="/media/images/dittoLogo.png" style={{width:"40%"}}></img>
                    <p className="mt-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

            </div>
            
        </div>
     );
}

export default Universe;