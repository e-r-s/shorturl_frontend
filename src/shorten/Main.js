 
 import React, { Component, useRef, useState }  from 'react';
 
 import Tab from '../components/Tab'; 
 import Single from './Single'; 

 window.some_func = function(){
    alert('a');
 }
function Main() {
  
  return (
    <div className="page ">
      <div className='page-title'>Shorten your url:</div>
 
        {/* <div className='custom-uid-title'>Customize your url: </div>
        <div className='custom-uid'>
            <div className='value'>{shortUrl}</div>
            <input type="text" placeholder='YOUR CUSTOM URL' />
        </div> */}
        {/* <Tab>
            <div label="Single URL">   */}
              <Single />
             {/* </div>
            <div label="Multiple"> 
             
            </div> 
       </Tab>  */}
         
    </div>
  );
}

export default Main;
