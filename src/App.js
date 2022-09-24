 
import './App.scss';
import AccountPopup from './components/AccountPopup';

import Footer from './components/Footer';
import Notifications from './components/Notification';
import ShortenMain from './shorten/Main';
import BackendMain from './backend/Main';

import UsePolicy from './pages/UsePolicy';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Pricing from './pages/Pricing';
import WhyUs from './pages/WhyUs';
import Resources from './pages/Resources';

import React, { Component, useEffect, useRef, useState }  from 'react';
import { api } from './shorten/Shorten.Api';
 
import { Routes, Route, Link ,useLocation} from "react-router-dom";


const MenuItem = (props)=>{
  const location = useLocation();
  var isActive = location.pathname === props.to;
  var className = isActive ? 'selected' : '';
  return (
    <Link   {...props} className={'menu-item ' + (isActive?' selected ':'')}>{props.children}</Link>
  );
}
function App() {

  const notificationRef = useRef();
  const authRef = useRef();

  window.sns={};
  window.sns.notify =   (params) => { notificationRef.current.notify(params); }
  window.sns.login =  (params) => { authRef.current.showLogin(params); }
  window.sns.register =  (params) => { authRef.current.showRegister(params); }
  window.sns.forgotPassword =  (params) => { authRef.current.showForgotPassword(params); }
  window.sns.user = null;  
  api.checkLogin();

  useEffect(() => {
    // notificationRef.current.notify({text:'dasd', title:'dadas'});
  }, []); 
  return (
    <div className="app">

      <div className="app-header-wrapper">
      <div className="app-header">
        <img src="./logo2.png" className="app-logo" alt="logo" />

        <div className='menu'>
          
            <MenuItem to={'/'}>Home</MenuItem>
            <MenuItem to={'/whyus'} className={'menu-item '} >Why Us?</MenuItem>
            <MenuItem to={'/pricing'} className='menu-item'>Pricing</MenuItem>
            <MenuItem to={'/resources'} className='menu-item'>Resources</MenuItem> 
        </div>

        <div className='account'> 
            <div className='menu-item' onClick={()=> window.sns.login() }>Login</div>
            <div className='menu-item' onClick={()=> window.sns.register() }>Register</div>
        </div>
       
      </div>
      </div>

        <Routes>
        <Route path="/" element={<ShortenMain />} />
        <Route path="/pricing" element={<Pricing />} />
 
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/Resources" element={<Resources />} /> 
 
        <Route path="/dashboard" element={<BackendMain />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/usepolicy" element={<UsePolicy />} />
        
        

        {/* <Route path="/order/:id" element={<OrderDetail />} /> */}
 
       </Routes>
        
        
        {/* <WhyUs /> */}
        {/* <Pricing /> */}
        {/* <BackendMain /> */}
        {/* <ShortenMain />   */}
        <AccountPopup ref={authRef} />
        <Notifications ref={notificationRef} />

        <Footer/>
        
    </div>
  );

}

export default App;
