import React from "react";

const Apps = () => {
  return (
    <div className="container-fluid">
      <h1>Apps</h1>
      <div className="row">
        <div className="col-4 p-4 mx-3">
          <h2 style={{ color: '#6c757d' }}>Kite</h2>
          <img style={{width:"80%",borderRadius:"20px",border:"2px solid black",opacity:"0.7"}}src="https://media.istockphoto.com/id/1040865674/photo/stock-market-report.webp?a=1&b=1&s=612x612&w=0&k=20&c=DRVKi8yGgJt_22SoMipVJMjSWp0335_7eVXgUMfo0TM=" alt="pic"></img>

        </div>
        <div className="col-4 p-4">
          <h2 style={{ color: '#6c757d' }}>Coin</h2>
          
          <img style={{width:"80%",borderRadius:"20px", border:"2px solid black",opacity:"0.7"}}src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=IWQzVeh6--ZOe9YxB1-EI1KSWooYTpZS2sqe6Zu6GJM="></img>
          
          
        </div>
        <div className="col-4 p-4">

        </div>
          
      </div>
      <div className="row">
        <div classname="col-4">
          <h2 style={{ color: '#6c757d' }}>Varsity</h2>
          <img style={{width:"80%",borderRadius:"20px",border:"2px solid black",opacity:"0.7"}}src="https://images.unsplash.com/photo-1740645580494-438e43cf9ffe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RvY2slMjBtYXJrZXQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"></img>
          
        </div>
        <div className="col-4">
          <h2 style={{ color: '#6c757d' }}>Streak</h2>
          <img style={{width:"80%",borderRadius:"20px",border:"2px solid black",opacity:"0.7"}}src="https://media.istockphoto.com/id/2159126735/photo/a-double-exposure-image-of-skyscrapers-with-overlay-of-financial-graphs-set-against-a-blurred.webp?a=1&b=1&s=612x612&w=0&k=20&c=m8ttWS6DvrU1vQqxseYFXqzK2yIb451DbCKfD4AYgck="></img>
        </div>
        <div classname="col-4">
          
        </div>
      </div>

  </div>
)};

export default Apps;