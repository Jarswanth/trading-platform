import React from 'react';

function Stats() {
    return ( 
        <div className="container mt-5">
            <div className="row p-5">
                <div className="col-5"> 
                    <h2 className="mb-2">Trust with confidence</h2>
                    <br></br>
                    <h4 className="mt-3">Customer-first always</h4>
                    <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with {"\u20B9"}3.5+ lakh crores worth of equity investments.</p>

                    <h4>No spam or gimmicks</h4>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4>The Zerodha universe</h4>
                    <p className="text-muted">Not just in app, but a whole ecosystem,. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    

                </div>
                <div className="col-1">

                </div>
                <div className="col-6 "> 
                    <img style={{width:"80%",margin:"0 auto"}} src="\media/images/ecosystem.png"></img>
                    <div>
                        <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our prodcuts <i class="fa-solid fa-arrow-right"></i></a>
                        <a href=""style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>

                    </div>

                </div>
            </div>

        </div>

     );
}

export default Stats;