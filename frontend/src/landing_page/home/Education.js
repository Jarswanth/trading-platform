import React from 'react';

function Education() {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <img src="media/images/education.svg"></img>

                </div>
                <div className="col-6 mt-5">
                    <h2>Free and open market education</h2>
                    <br></br>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <br></br><br></br>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
            </div>
        </div>
     );
}

export default Education;