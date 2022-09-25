 import './Shorten.scss'; 
 import React, { Component, useImperativeHandle, forwardRef,useState }  from 'react';


 import QrCode from '../components/QrCode';

 import {api} from './Shorten.Api'; 
 import lib from 'url_shortening_lib';  
 const StringHelpers = lib.StringHelpers;



const ShortUrlListItem =  ({item}) => {
 
  const [canCopy, setCanCopy] = useState(true);
  const [showAllSettings, setShowAllSettings] = useState(false);

  const [citationLoading, setCitationLoading] = useState(false);
  const [activeSettingTab, setActiveSettingTab] = useState(1);
  const [settings, setSettings] = useState({}); 


  let isMember = true;
  // let isMember = window.sns.user ? true:false;

  const onCopyClicked =(str) =>{ 
        StringHelpers.copyToClipboard(str).then(AS => {
          setCanCopy(true); 
          window.sns.notify({title:'Copied!', text:'You successfully copied to the clipboard.', time:2}); 
        })
        .catch(error => {
          setCanCopy(false);
        }); 
  }

 

  const onSettingsClicked =(str) =>{ 
    if(isMember){
      item.settings =  item.settings || {
        addvertisementTimeLimit:4
      };
    }
    setShowAllSettings(!showAllSettings);
  }

  const enableDisableProxy = () => { 
    settings.enableProxy = !settings.enableProxy;
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings);

    settingChanged('enableProxy', settings.enableProxy);
  }
  const enableDisableTracking = () => { 
    settings.enableTracking = !settings.enableTracking;
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings);
 
    settingChanged('enableTracking', settings.enableTracking);
     
  }
  const enableDisablePasswordProtection = () => { 
    settings.enablePassword = !settings.enablePassword; 
    if(settings.enablePassword && !settings.password){
        settings.password = new Date().getTime().toString().substring(6); 
    }
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings);
 
    settingChanged('enablePassword',settings.enablePassword);
    
  }

  const setPassword = (e) => { 
    settings.password = e.target.value;  
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings); 
    settingChanged('password',e.target.value);
  }

  const enableDisableAd = () => { 
    settings.enableAdvertisement = !settings.enableAdvertisement;
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings);
    settingChanged('enableAdvertisement', settings.enableAdvertisement);
  }

  const enableDisableCustomAd = () => { 
    settings.enableCustomAdvertisement = !settings.enableCustomAdvertisement;
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings);
    settingChanged('enableCustomAdvertisement', settings.enableCustomAdvertisement);
  }


  const setAdvertisementPageHtml = (e) => { 
    settings.addvertisementHtml = e.target.value;  
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings);
  }

  const setAdvertisementPageTimeLimit = (e) => { 
    settings.addvertisementTimeLimit = e.target.value;  
    var newsettings = Object.assign({}, settings);
    setSettings(newsettings);
    settingChanged('addvertisementTimeLimit', settings.addvertisementTimeLimit);
  }


  const getCitationText = async () => { 
    setCitationLoading(true);
    await settingChanged('enableCite',true);
    setCitationLoading(false);
  }
 
  

  const advertisementPageHtmlChanged = () => {  
    settingChanged('addvertisementHtml', settings.addvertisementHtml);
  }
 
 
  const settingChanged = async (key, value) => { 
      
      let uid =  item.uid;
      try{
          var data = await api.post(window.VARS.apiUrl+'setsetting',{uid, key, value}); 
          if(data){  
              setSettings(data); 
          } 
      }
      catch(ex){
        return false;
      }

      return true;
  }

  const onLogin = ()=>{
    window.sns.login();
  }
  
  
  let shortUrl = window.VARS.shortUrl;
  
  return  <div className="item" key={item.hash}>
            <div className="head" >
                  <div className="url" title={item.url}>{item.url}</div>
                  <div className="short-url"><a target="_blank" href={shortUrl+item.uid}>{shortUrl+item.uid}</a> </div>
                  {canCopy? 
                    null:
                    <div className="short-url"><input readOnly={true} value={shortUrl+item.uid} /> </div>
                  }
                  <div className="copy button button--light" onClick={()=> onCopyClicked(shortUrl+item.uid)}>Copy</div>
                  <div className={'more button button--white' + (showAllSettings?' selected ':'') + (item.settings?' checked ':'')} onClick={()=> onSettingsClicked()}>More</div>
            </div>
            {showAllSettings && !isMember?
                <div className="members-only" >
                    Login/Signup to see settings for this domain
                      <br/>
                      <div className="button button--light" onClick={()=>onLogin()} >LOGIN</div>
                </div>
            :null}
            {showAllSettings && isMember?
              <div className="all-settings" >
                    <div className="settings" >
                        <div className="settings-inner" >
                              <div className={'setting-item' + (activeSettingTab==1?' selected ':'')} onClick={()=> setActiveSettingTab(1)}>Get QR Code</div>
                              <div className={'setting-item' + (activeSettingTab==2?' selected ':'')} onClick={()=> setActiveSettingTab(2)}>Get Citation</div>
                              <div className={'setting-item' + (activeSettingTab==3?' selected ':'')} onClick={()=> setActiveSettingTab(3)}>Settings</div> 
                              <div className={'setting-item' + (activeSettingTab==4?' selected ':'')} onClick={()=> setActiveSettingTab(4)}>Advertisement</div> 
                        </div>
                    </div>

                    {activeSettingTab==1? <QrCode url={shortUrl+item.uid} /> : null}
                    
                    {activeSettingTab==2? 
                        <div className='citation'> 

                            {settings.citeText? 
                              <div className="cite-setting" > 
                                  <div className="value" >
                                      <textarea value='Zernike, K. (2016, February 29). Testing for joy and grit? Schools nationwide push to measure students’ emotional skills. The New York Times. https://' />
                                      <div className="copy button button--white" onClick={()=> onCopyClicked(shortUrl+item.uid)}>Copy</div>
                                  </div>   
                              </div> 
                              :
                                <div className="citation-not-ok">
                                     
                                      {citationLoading?
                                          <div className="cite-loading">
                                            <img src="logo.png" />
                                            Loading...
                                          </div> 
                                          :
                                          <div className="cite-button button button--light" onClick={()=>getCitationText()}>Get Citation Text</div> 
                                      }
                                </div> 
                            }



                        </div>
                     : null}
                    

                    {activeSettingTab==3? 
                        <div className='url-settings'> 
                            <div className={'checkbox'+ (settings.enableProxy?' checked ':'')} onClick={()=>{ enableDisableProxy(); }}>
                                Enable Proxy:  <span className="desc">Actual content will be served from our servers </span>
                            </div>  
                            <div className={'checkbox'+ (settings.enableTracking?' checked ':'')} onClick={()=>{ enableDisableTracking(); }}>
                                Enable Tracking:  <span className="desc">You can track user location, ip, access time and more </span>
                            </div>  
                            <div className={'checkbox'+ (settings.enablePassword?' checked ':'')} onClick={()=>{ enableDisablePasswordProtection(); }}>
                                Password Protected:  <span className="desc">People need to type password to access to the content </span>
                            </div>   

                            {settings.enablePassword?
                            <div className='password'>  
                                <div className="pwd-setting" >
                                    <div className="label" >Set Password: </div> 
                                    <div className="value" >
                                        <input type="text" value={settings.password} onChange={(e)=>setPassword(e)} />
                                    </div>   
                                    <div className="desc" >Visitors have to type this password to access url.</div> 
                                </div>  
                            </div>
                            :null}

                        </div>
                        
                     : null}



                    {activeSettingTab==4? 
                        <div className='ad-settings'> 
                            <div className={'checkbox'+ (settings.enableAdvertisement?' checked ':'')} onClick={()=>{ enableDisableAd(); }}>
                                Enable Advertisement: <span className="desc">Shows advertisement before redirect.</span>
                            </div>  
                          
                            <div className={'checkbox'+ (settings.enableCustomAdvertisement?' checked ':'')} onClick={()=>{ enableDisableCustomAd(); }}>
                                Enable Custom Advertisement: <span className="desc">Shows your advertisement before redirect. You need to provide html code.</span>
                            </div>  

                            {settings.enableCustomAdvertisement?
                            <div className="ad-setting ad-html" >
                                <div className="label" >Advertisement page image url for PC:  <span className="desc">After change click to Save</span></div> 
                                <div className="value" >
                                    <textarea type="text" placeholder='https://.... Image Url for PC addvertisement (Must start with https)' value={settings.addvertisementHtml} onChange={(e)=>setAdvertisementPageHtml(e)} />
                                </div>   
                                <br/>
                                <div className="label" >Advertisement page image url for Mobile:  <span className="desc">After change click to Save</span></div> 
                                <div className="value" >
                                    <textarea type="text" placeholder='https://.... Image Url for mobile addvertisement (Must start with https)' value={settings.addvertisementHtml} onChange={(e)=>setAdvertisementPageHtml(e)} />
                                </div>  
                            </div>   
                             :null}
                            {settings.enableCustomAdvertisement?
                            <div className="ad-setting ad-time" >
                                <div className="label" >Advertisement time limit: </div> 
                                <div className="value" >
                                    <select value={settings.addvertisementTimeLimit} onChange={(e)=>setAdvertisementPageTimeLimit(e)} >
                                        <option value="1">1 Second</option>
                                        <option value="2">2 Second</option>
                                        <option value="3">3 Second</option>
                                        <option value="4">4 Second</option>
                                        <option value="5">5 Second</option>
                                        <option value="6">6 Second</option>
                                        <option value="7">7 Second</option>
                                        <option value="8">8 Second</option>
                                        <option value="9">9 Second</option>
                                        <option value="10">10 Second</option>
                                        <option value="12">12 Second</option>
                                        <option value="15">15 Second</option>
                                        <option value="20">20 Second</option>
                                        <option value="30">30 Second</option>
                                    </select>
                                 </div>   
                                <div className="desc" >Minimum time limit as seconds to skip advertisement</div> 

                            </div>    
                            :null}

                            {settings.enableCustomAdvertisement?
                            <div className="ad-setting ad-save" >
                              <div className="copy button button--white" onClick={()=> advertisementPageHtmlChanged()}>Save Advertisement Settings</div>
                            </div>
                            :null}

                        </div>
                        
                     : null}

                    <br/>
              </div>
            :null}

            
          </div> 
  
}

export default ShortUrlListItem;
