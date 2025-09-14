import React from 'react';
function Hero() {
    return (
        <div className="container-fluid   bg-primary text-white">
            <div className="row">
                <div className="col-1"></div>
                <div className="col mt-5">
                    <h4>Support Portal</h4>
                    <br></br>

                </div>
                <div className="col mt-5">
                    <h4>Track Tickets</h4>

                </div>

            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col ">
                    <p><i class="fa-solid fa-magnifying-glass"></i> Search for an answer or browse help topics to create a ticket</p>
                    <form  role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /><br></br>
                        <button class="btn btn-outline-dark text-black text-white" type="submit">Search</button>
                    </form>
                    <br></br>



                </div>
                <div className="col">
                    <h4>Featured</h4>
                    <p>1.Current Takeover and Delisting</p>
                    <p>2.Latest Intraday leverages</p>

                </div>
            </div>
            
            


        </div>
    );
}

export default Hero;