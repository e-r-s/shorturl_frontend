 
 import React, { Component, useRef, useState }  from 'react';
 
 import Tab from '../components/Tab';  
 import  './Pages.scss'; 

 import { Routes, Route, Link ,useLocation} from "react-router-dom";

 
function PageNotFound() {
  
  return (
    <div className=" static-page not-found-page">
        <div className='head-wrapper'>
            <div className='head'>
                <div className='title'>Page Not Found</div>
                <div className='desc'>Please try <Link  to="/">Something like this.</Link></div>
            </div>
        </div>
        
        <div className="page " >
        
              
             <img src="./404.png" />
        
        </div>
    </div>
  );
}

export default PageNotFound;
