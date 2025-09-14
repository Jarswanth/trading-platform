import React from 'react';
function RightSection({heading,para,learnmore,imgurl}) {
    return ( 
        <div className="container mt-5">
                <div className="row">
                    
                    
                    <div className="col-6 mt-5 p-5">
                        <h3>{heading}</h3>
                        <p>{para}</p>
                        <a href="" style={{textDecoration:"none"}}>{learnmore} <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" className="mx-5" style={{textDecoration:"none"}}>{learnmore} <i class="fa-solid fa-arrow-right"></i></a>
                        <br></br><br></br>
                      
                       

                    </div>
                    
                    <div className="col-6 ">
                        <img src={imgurl}></img>

                    </div>
                    

                </div>

            </div>
     );
}

export default RightSection;