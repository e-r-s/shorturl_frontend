 
import './App.scss';
import AccountPopup from './components/AccountPopup';

import Notifications from './components/Notification';
import ShortenMain from './shorten/Main';
import React, { Component, useEffect, useRef, useState }  from 'react';
import { api } from './shorten/Shorten.Api';
 

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
      <div className="app-header">
        <img src="./logo.jpg" className="app-logo" alt="logo" />

        <div className='menu'>
            <div className='menu-item selected'>Home</div>
            <div className='menu-item'>Why Us?</div>
            <div className='menu-item'>Pricing</div>
            <div className='menu-item'>Resources</div> 
        </div>

        <div className='account'> 
            <div className='menu-item' onClick={()=> window.sns.login() }>Login</div>
            <div className='menu-item' onClick={()=> window.sns.register() }>Register</div>
        </div>
       
      </div>
      
        <ShortenMain />  
        <AccountPopup ref={authRef} />
        <Notifications ref={notificationRef} />
        
    </div>
  );

}

export default App;
