import React from 'react';
import Hero from "./Hero.js"
import LeftSection from "./LeftSection.js"
import RightSection from "./RightSection.js"
import Universe from "./Universe.js"
 
function ProductsPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imgurl="/media/images/kite.png" heading="Kite"para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." trydemo="Try demo" learnmore="
Learn more"gimg="/media/images/googlePlayBadge.svg"appimg="/media/images/appstoreBadge.svg"/>

        <RightSection heading="Console" para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnmore="Learnmore" imgurl="/media/images/console.png"/>

        <LeftSection imgurl="/media/images/coin.png" heading="Coin"para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." trydemo="Coin" learnmore="Learn more"gimg="/media/images/googlePlayBadge.svg"appimg="/media/images/appstoreBadge.svg"/>

        <RightSection heading="Kite Connect API" para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnmore="Kite Connect " imgurl="/media/images/kiteconnect.png"/>

        <LeftSection imgurl="/media/images/varsity.png" heading="Varsity mobile"para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." trydemo="Try demo" learnmore="Learn more"gimg="/media/images/googlePlayBadge.svg"appimg="/media/images/appstoreBadge.svg"/>

        <p className="text-center mt-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
        
        <Universe/>
        </>
     );
}

export default ProductsPage;