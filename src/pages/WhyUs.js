 
 import React, { Component, useRef, useState }  from 'react';
 
 import Tab from '../components/Tab';  
 import  './Pages.scss'; 

 
function Pricing() {
  
  return (
    <div className=" static-page">
        <div className='head-wrapper'>
            <div className='head'>
                <div className='title'>World-class link management</div>
                <div className='desc'>No. 1 Url Shotening Service. #1ShortUrl helps businesses shine by transforming their links into powerful tools for marketers and customer support teams.</div>
            </div>
        </div>
        
        <div className="page">
          {/* <div className='page-subdesc'>
            Save up to 34% when you pay annually
          </div> */}

          <div className='box'>
              <div className='box-image'>
                <img src="logo.png" />
              </div>
              <div className='box-content'>
                  <div className='page-sub-title'>
                  1. Work smarter with #1ShortUrl’s all-in-one platform
                  </div>
                  <div className='page-text'>
                  Creating, sharing and monitoring your links shouldn’t be a drag. #1ShortUrl helps you work faster and more intelligently—with features like branded links and the ability to redirect any link—so you can relish the sweet taste of hitting your performance goals.
                  </div>
              </div>
          </div>

          <div className='box'>
              <div className='box-image'>
                <img src="logo.png" />
              </div>
              <div className='box-content'>
                  <div className='page-sub-title'>
                  2. Get more clicks with custom links
                  </div>
                  <div className='page-text'>
                  Make your links powerful marketing assets. Custom links replace “1ShortUrl.com” with your chosen domain name, making your links consistently recognizable across channels. They’re so powerful, businesses that use them get more clicks.
                  </div>
              </div>
          </div>

          <div className='box'>
              <div className='box-image'>
                <img src="logo.png" />
              </div>
              <div className='box-content'>
                  <div className='page-sub-title'>
                  3. Maximize your performance using real-time analytics
                  </div>
                  <div className='page-text'>
                  Understand what content is resonating with your audience with comprehensive metrics on every link and campaign—like clicks, geographic data, and top referring channels. #1ShortUrl takes the guesswork out of your link performance so you can share more of what your audience wants.
                  </div>
              </div>
          </div>
          
          <div className='box'>
              <div className='box-image'>
                <img src="logo.png" />
              </div>
              <div className='box-content'>
                  <div className='page-sub-title'>
                  4. Integrate seamlessly with the tools you love
                  </div>
                  <div className='page-text'>
                  #1ShortUrl integrates with nearly every social media and digital marketing tool, saving you time and hassle. Need to create links at scale? #1ShortUrl’s got you covered. Whether you need 100 links or 100,000, the open and flexible #1ShortUrl API makes it simple and seamless.
                  </div>
              </div>
          </div>


          <div className='box'>
              <div className='box-image'>
                <img src="logo512.png" />
              </div>
              <div className='box-content'>
                  <div className='page-sub-title'>
                  5. Rest assured knowing your links are secure
                  </div>
                  <div className='page-text'>
                  #1ShortUrl is dedicated to ensuring your links are safe and reliable. Every link you create using #1ShortUrl is encrypted with HTTPS to maximize protection against eavesdropping or tampering by third parties, keeping your content safe from the bad guys.
                  </div>
              </div>
          </div>



          
        </div>
    </div>
  );
}

export default Pricing;
