  

import React from 'react';  
import  './Footer.scss'; 
  
 
const { Fragment, useState, useEffect, forwardRef, useRef, useImperativeHandle } = React;


const Footer = () => {
 
  return (  
          <footer className="footer">
          <div className="footer-inner">
            <div className="footer__addr">
              <h1 className="footer__logo"><img src="./logo2.png" className="app-logo" alt="logo" /></h1>
                  
              <h2>Contact</h2>
              
              <address>
                support@1shorturl.com 
               </address>
            </div>
            
            <ul className="footer__nav">
              <li className="nav__item">
                <h2 className="nav__title">About</h2>

                <ul className="nav__ul">
                  <li>
                    <a href="#">Why #1ShortUrl?</a>
                  </li>

                  <li>
                    <a href="#">How it works?</a>
                  </li>
                      
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </li>
              
              <li className="nav__item">
                <h2 className="nav__title">Advanced</h2>
                
                <ul className="nav__ul">
                  <li>
                    <a href="#">API Documentation</a>
                  </li>
                  
                  <li>
                    <a href="#">Custom domain</a>
                  </li>
                  
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  
                 
                </ul>
              </li>
              
              <li className="nav__item">
                <h2 className="nav__title">Legal</h2>
                
                <ul className="nav__ul">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  
                  <li>
                    <a href="#">Acceptable Use Policy</a>
                  </li>
                </ul>
              </li>
            </ul>
            
            <div className="legal">
              <p>&copy; 2022 #1ShortUrl. All rights reserved.</p>
               
            </div>
            </div>
          </footer>
  );
};


export default Footer;
