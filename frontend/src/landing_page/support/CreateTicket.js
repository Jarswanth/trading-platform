import React from 'react';
function CreateTicket() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h4>To create a ticket, select a relevant topic</h4>

                </div>

            </div>
            <div className="row mt-3" style={{textDecoration:"none",lineHeight:"2.5"}}>
                <div className="col mt-3 " >
                    <h5><i class="fa-solid fa-circle-user"></i>&nbsp;&nbsp;Account Opening</h5><br></br>
                    <a  href=""class="text-decoration-none">Online Account Opening</a><br></br>
                    <a href=""class="text-decoration-none">Offline Accoutn Opening</a><br></br>
                    <a href=""class="text-decoration-none">Company</a><br></br>
                    <a href=""class="text-decoration-none">Partnership</a><br></br>
                    <a href=""class="text-decoration-none">NRI Account Opening</a>


                </div>
                <div className="col mt-3"> 
                    <h5><i class="fa-solid fa-plus"></i>&nbsp;&nbsp;Your Zerodha Account</h5><br></br>
                    <a href=""class="text-decoration-none">Login Credentials</a><br></br>
                    <a href=""class="text-decoration-none">Account Modification</a><br></br>
                    <a href=""class="text-decoration-none">Bank details</a><br></br>
                    <a href=""class="text-decoration-none">Your Profile</a><br></br>
                    <a href=""class="text-decoration-none">Transfer and conversion of shares</a><br></br>

                </div>
                <div className="col mt-3">
                    <h5><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;Your Zerodha Account</h5><br></br>
                    <a href=""class="text-decoration-none">Margin,Leverage</a><br></br>
                    <a href=""class="text-decoration-none">Kite Web and Mobile</a><br></br>
                    <a href=""class="text-decoration-none">Trading FAQs</a><br></br>
                    <a href=""class="text-decoration-none">Corporate Actions</a><br></br>
                    <a href=""class="text-decoration-none">Sentinel</a><br></br>

                </div>


            </div>
        </div>
     );
}

export default CreateTicket;