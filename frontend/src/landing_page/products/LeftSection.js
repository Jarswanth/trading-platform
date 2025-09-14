import React from 'react';
function LeftSection({imgurl,heading,para,trydemo,learnmore,gimg,appimg}) {
    return ( 
        
            <div className="container mt-5 ">
                <div className="row ">
                    <div className="col mx-4">
                        <img src={imgurl}></img>

                    </div>
                    <div className="col-1 mt-5 "></div>
                    <div className="col mt-5">
                        <h3>{heading}</h3>
                        <p>{para}</p>
                        <a href="" style={{textDecoration:"none"}}>{trydemo} <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" className="mx-5" style={{textDecoration:"none"}}>{learnmore} <i class="fa-solid fa-arrow-right"></i></a>
                        <br></br><br></br>
                        <img src={gimg}></img>
                        <img className="mx-5"src={appimg}></img>

                    </div>
                    

                </div>

            </div>
        
     );
}

export default LeftSection;