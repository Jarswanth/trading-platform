import React from 'react';
function Brokerage() {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-8"> 
                    <h4 className="text-center mt-3">Type of account</h4>
                    <ul style={{lineHeight:"2.5"}}>
                        <li>Online account</li>
                        <li>Offline account</li>
                        <li>NRI account (offline only)</li>
                        <li>Partnership, LLP, HUF, or Corporate accounts (offline only)</li>
                        <li>₹4 lakh - ₹10 lakh</li>
                        <li>Above ₹10 lakh</li>
                    </ul>

                </div>
                <div className="col-4">
                    <h4 className="text-center mt-3">List of charges</h4>
                    <ul>
                        <p>Free</p>
                        <p>Free</p>
                        <p>₹ 500</p>
                        <p>₹ 500</p>
                        <p>₹ 100 per year, charged quarterly*</p>
                        <p>₹ 300 per year, charged quarterly</p>
                    </ul>
                     

                </div>
            </div>
            <div className="row mt-4"> </div>
            

        </div>
     );
}

export default Brokerage;