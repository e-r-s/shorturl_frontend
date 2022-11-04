 
 import React, { Component, useRef, useState }  from 'react';
 
 import Tab from '../components/Tab';  
 import  './Pages.scss'; 

 
function Resources() {
  
  return (
    <div className=" static-page">
        <div className='head-wrapper'>
            <div className='head'>
                <div className='title'>Works Anywhere You Do</div>
                <div className='desc'>You can save time and be more productive by shortening, branding, sharing and tracking your links from the various places and ways you work.</div>
            </div>
        </div>
        
        <div className="page resources-page">
          {/* <div className='page-subdesc'>
            Save up to 34% when you pay annually
          </div> */}
          <div className='boxes'>
                <div className='box'>
                <div className='box-image'>
                  <img src="logo.png" />
                </div>
                <div className='box-content'>
                    <div className='page-sub-title'>
                    API Documentation
                    </div>
                    <div className='page-text'>
                    Creating, sharing and monitoring your links shouldn’t be a drag. #1ShortUrl helps you work faster and more intelligently—with features like branded links and the ability to redirect any link—so you can relish the sweet taste of hitting your performance goals.
                    </div>
                </div>
                </div>
                <div className='box '>
                <div className='box-image'>
                  <img src="logo.png" />
                </div>
                <div className='box-content'>
                    <div className='page-sub-title'>
                    How to use custom urls? 
                    </div>
                    <div className='page-text'>
                    Make your links powerful marketing assets. Custom links replace “bit.ly” with your chosen domain name, making your links consistently recognizable across channels. They’re so powerful, businesses that use them get more clicks.
                    </div>
                </div>
                </div>
          
                <div className='box '>
                <div className='box-image'>
                  <img src="logo.png" />
                </div>
                <div className='box-content'>
                    <div className='page-sub-title'>
                    Advertisement integrations
                    </div>
                    <div className='page-text'>
                    Make your links powerful marketing assets. Custom links replace “bit.ly” with your chosen domain name, making your links consistently recognizable across channels. They’re so powerful, businesses that use them get more clicks.
                    </div>
                </div>
                </div>
          
                <div className='box '>
                <div className='box-image'>
                  <img src="logo.png" />
                </div>
                <div className='box-content'>
                    <div className='page-sub-title'>
                    Wordpress, Joomla, Django, Wix integrations
                    </div>
                    <div className='page-text'>
                    Make your links powerful marketing assets. Custom links replace “bit.ly” with your chosen domain name, making your links consistently recognizable across channels. They’re so powerful, businesses that use them get more clicks.
                    </div>
                </div>
                </div>
          
                <div className='box '>
                <div className='box-image'>
                  <img src="logo.png" />
                </div>
                <div className='box-content'>
                    <div className='page-sub-title'>
                    Using Google Analytics with #1ShortUrl
                    </div>
                    <div className='page-text'>
                    Make your links powerful marketing assets. Custom links replace “bit.ly” with your chosen domain name, making your links consistently recognizable across channels. They’re so powerful, businesses that use them get more clicks.
                    </div>
                </div>
                </div>
                
          </div>


 


          
        </div>
    </div>
  );
}

export default Resources;
