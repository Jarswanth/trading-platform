import React from 'react';

function Team() {
    return ( 
        <div className="container  ">
            <div className="row text-center " style={{lineHeight:"2"}}>
                <h2 >People</h2>
               
                <div className="container p-5">
                    <div className="row text-start">
                        <div className="col text-center">
                           <img src="/media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"50%"}}></img>
                           <h4 className="mt-3">Nithin Kamath</h4>
                           <h5>Founder, CEO</h5>
                        </div>
                        <div className="col ">
                            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                            <p>Playing basketball is his zen.</p>
                            <p>Connect on Homepage / TradingQnA / Twitter</p>

                        </div>
                        
                        
                        

                    </div>
                </div>
                

            </div>
                 
        </div>
     );
}

export default Team;