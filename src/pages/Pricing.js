
import React, { Component, useRef, useState } from 'react';

import Tab from '../components/Tab';
import './Pages.scss';


function Pricing() {

  return (
    <div className=" static-page">
      <div className='head-wrapper'>
        <div className='head'>
          <div className='title'>Pricing for brands and businesses of all sizes</div>
          <div className='desc'>Connect to your audience with branded links, QR Codes and advertisements that will get their attention.</div>
        </div>
      </div>

      <div className="page">
        <div className='page-subdesc'>
          Save up to 34% when you pay annually
        </div>

        <div className='boxes price-boxes'>
          <div className='box'>
            <div className='box-content'>
              <div className='box-title'>FREE</div>
              <div className='price-box-price'>
                <span className='value'>$0</span>
                <span className='time'> / month</span>
                <div className='desc'>Limited free version</div>
              </div>
              <div className='buy-button button'>Get Started</div>
              <div className='box-line'>50 short links/month</div>
              <div className='sub-title'>Includes:</div>
              <div className='price-box-spec'>#1ShortUrl branded Link-in-bio</div>
              <div className='price-box-spec'>Custom back-halves</div>
              <div className='price-box-spec'>QR Codes</div>
              <div className='price-box-spec'>Link history and reporting</div>
              <div className='price-box-spec'>&nbsp;</div>
              <div className='price-box-spec'>&nbsp;</div> 
            </div>
          </div>
          <div className='box'>
            <div className='box-content'>
              <div className='box-title'>STARTER</div>
              <div className='price-box-price'>
                <span className='value'>$2</span>
                <span className='time'> / month</span>
                <div className='desc'>(annual one-time charge of $20)</div>
              </div>
              <div className='buy-button button'>Get Started</div>
              <div className='box-line'>1000 short links/month</div>
              <div className='sub-title'>Everything in Free, plus:</div>
              <div className='price-box-spec'>Link-in-bio</div>
              <div className='price-box-spec'>Data export</div>
              <div className='price-box-spec'>10 Proxy url/month</div>
              <div className='price-box-spec'>Url Forms</div>
              <div className='price-box-spec'>Enable Tracking</div>
              <div className='price-box-spec'>Password protected content</div>
            </div>
          </div>
          <div className='box'>
            <div className='box-content'>
              <div className='box-title'>PREMIUM</div>
              <div className='price-box-price'>
                <span className='value'>$5</span>
                <span className='time'> / month</span>
                <div className='desc'>(annual one-time charge of $50)</div>
              </div>
              <div className='buy-button button'>Get Started</div>
              <div className='box-line'>3000 branded short links/month</div>
              <div className='sub-title'>Everything in Starter, plus:</div>
              <div className='price-box-spec'>100 Proxy url/month</div>
              <div className='price-box-spec'>Custom Advertisement</div>
              <div className='price-box-spec'>Custom Domain</div>
              <div className='price-box-spec'>Pre-defined Settings</div>
              <div className='price-box-spec'>Customer Support</div>
              <div className='price-box-spec'>API access</div>
            </div>
          </div>
          <div className='box'>
            <div className='box-content'>
              <div className='box-title'>ENTERPRISE</div>
              <div className='price-box-price'>
                <span className='value'>$10</span>
                <span className='time'> / month</span>
                <div className='desc'>(annual one-time charge of $100)</div>
              </div>
              <div className='buy-button button'>Get Started</div>
              <div className='box-line'>Unlimited short links</div>
              <div className='sub-title'>Everything in Premium, plus:</div>
              <div className='price-box-spec'>1000 Proxy url/month</div>
              <div className='price-box-spec'>Advanced Statics</div>
              <div className='price-box-spec'>Multiple user seats (Team)</div>
              <div className='price-box-spec'>99.9% SLA uptime</div>
              <div className='price-box-spec'>Serverless Redirect</div> 
              <div className='price-box-spec'>Integrations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
