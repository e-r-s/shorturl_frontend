 
 import React, { Component, useRef, useState }  from 'react';
 
 import Tab from '../components/Tab'; 
//  import Single from './Single'; 
 import  './Backend.scss'; 
 
function Main() {
  
  const gotoPage = (name) => {
    console.log(name);
  }

  return (
    <div className="backend ">
        <div className="menu">
          <div className="menu-item " onClick={()=>gotoPage('dashboard')}>Dashboard</div>
          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>My Short Urls</div>
          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>Tracking</div>
          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>Advertisement</div>
          
          <div className="menu-seperator"></div>

          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>API</div>
          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>Custom domains</div> 

          <div className="menu-seperator"></div>

          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>Edit Profile</div>
          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>Login History</div>
          <div className="menu-item " onClick={()=>gotoPage('editprofile')}>Account</div>
        </div>
          
        <div className="page ">
          <div className='page-title'>Shorten your url:</div>
              {/* <Single />  */}
        </div>
    </div>
  );
}

export default Main;
