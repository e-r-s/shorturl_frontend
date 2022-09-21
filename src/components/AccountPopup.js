  

import React from 'react'; 
import { api } from '../shorten/Shorten.Api';
import  './AccountPopup.scss'; 
 
import Popup from './Popup';

 
const { Fragment, useState, useEffect, forwardRef, useRef, useImperativeHandle } = React;


const AccountPopup = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    showLogin:showLogin,
    showRegister:showRegister,
    showForgotPassword:showForgotPassword
    

  }));
  
  const [ showLoginPopup, setShowLoginPopup] = useState(false); 
  const [  showRegisterPopup,setShowRegisterPopup] = useState(false); 
  const [  showForgotPasswordPopup,setShowForgotPasswordPopup] = useState(false); 
  const [  wrongInfo , setWrongInfo] = useState(false); 
  const [  showWrongMessage , setShowWrongMessage] = useState(false); 
 
  const passwordRef = useRef(); 
  const emailRef = useRef();
  const mobileRef = useRef();
  const nameRef = useRef();
 
  const showLogin = ()=>{
    console.log('show login');
    setShowLoginPopup(true);
    setShowRegisterPopup(false);
    setShowForgotPasswordPopup(false);
    setShowWrongMessage(false);
    setWrongInfo(false); 
  }; 
  
  const showRegister= ()=>{
    setShowRegisterPopup(true);
    setShowLoginPopup(false);
    setShowForgotPasswordPopup(false);
    setShowWrongMessage(false);
    setWrongInfo(false); 
  };
  
  const showForgotPassword= ()=>{
    setShowForgotPasswordPopup(true);
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
    setShowWrongMessage(false);
    setWrongInfo(false); 
  };


  const onLogin= async ()=>{
      var loginResult = await api.login(emailRef.current.value, passwordRef.current.value);
      if(loginResult){
        setShowLoginPopup(false); 
        setShowWrongMessage(false);
      }
      else{
        setWrongInfo(true);
        setShowWrongMessage(true);
        setTimeout(()=>{ 
          setWrongInfo(false); 
        },500);
      }
  };

  const onRegister= async ()=>{
    var loginResult = await api.register(nameRef.current.value, mobileRef.current.value, emailRef.current.value, passwordRef.current.value);
    if(loginResult){
      setShowRegisterPopup(false); 
      setShowWrongMessage(false);
    }
    else{ 
      setWrongInfo(true);
      setShowWrongMessage(true);
      setTimeout(()=>{ 
        setWrongInfo(false); 
      },500);
    }
};

const onForgetPassword = async ()=>{
    var loginResult = await api.forgetPassword(nameRef.current.value, emailRef.current.value);
    if(loginResult){
      setShowForgotPasswordPopup(false); 
      setShowWrongMessage(false);
    }
    else{ 
      setWrongInfo(true);
      setShowWrongMessage(true);
      setTimeout(()=>{ 
        setWrongInfo(false); 
      },500);
    }
};
  
  return ( 

    <div>
    {showLoginPopup?<Popup title="Login" maxWidth={'400px'} onPopupHide={()=> setShowLoginPopup(false)}>
     
      <div className={'login_box' + (wrongInfo?' wrong ':'')}  >
            <div className={'wrong-message' + (showWrongMessage?' show ':'')}>Wrong username or password</div>
            
            <div className='login_box_label'>Email:</div>
            <div className='login_box_value'>
              <input type="text" name="username" ref={emailRef} />
            </div>
       
            <div className='login_box_label'>Password:</div>
            <div className='login_box_value'>
              <input type="password"  name="password"  ref={passwordRef} />
            </div> 

            <input type="submit" className='login_box_button button button--red' onClick={()=>onLogin()} value="Login" />  
            <div className='login_box_links'> 
              <a onClick={()=>showForgotPassword()}>Forgot Password?</a>
              <a onClick={()=>showRegister()}>Register</a>
            </div>

      </div> 

      </Popup>:null}


      {showRegisterPopup?<Popup title="Register" maxWidth={'400px'} onPopupHide={()=> setShowRegisterPopup(false)}>
       
          <div className={'login_box' + (wrongInfo?' wrong ':'')} action="" method='POST'>
              <div className={'wrong-message' + (showWrongMessage?' show ':'')}>There was an error while registering.</div>

              <div className='login_box_label'>Full Name:</div>
              <div className='login_box_value'>
                <input type="text"  name="name" ref={nameRef} />
              </div> 

              <div className='login_box_label'>Mobile number:</div>
              <div className='login_box_value'>
                <input type="text"  name="mobile" ref={mobileRef}  />
              </div> 

              <div className='login_box_label'>Email:</div>
              <div className='login_box_value'>
                <input type="text" name="email" ref={emailRef}  />
              </div>

              <div className='login_box_label'>Password</div>
              <div className='login_box_value'>
                <input type="password"  name="password" ref={passwordRef}  />
              </div> 

              <input type="submit" className='login_box_button button button--red' onClick={()=>onRegister()}  value="Register" />  
              <div className='login_box_links'> 
              <a onClick={()=>showForgotPassword()}>Forgot Password?</a>
              <a onClick={()=>showLogin()}>Login</a>
              </div>

          </div> 
      </Popup>:null}

      {showForgotPasswordPopup?<Popup title="Forgot Password" maxWidth={'400px'} onPopupHide={()=> setShowForgotPasswordPopup(false)}>

      <div className={'login_box' + (wrongInfo?' wrong ':'')} action="" method='POST'>
          <div className={'wrong-message' + (showWrongMessage?' show ':'')}>There was an error.</div>

          <div className='login_box_label'>Full Name:</div>
          <div className='login_box_value'>
            <input type="text"  name="name" ref={nameRef}  />
          </div>  

          <div className='login_box_label'>Email:</div>
          <div className='login_box_value'>
            <input type="text" name="email" ref={emailRef}  />
          </div>
 
          <input type="submit" className='login_box_button button button--red' onClick={()=>onForgetPassword()}  value="Send E-mail" />  
          <div className='login_box_links'> 
              <a onClick={()=>showLogin()}>Login</a>
              <a onClick={()=>showRegister()}>Register</a>
          </div>

        </div> 
      
      </Popup>:null}

      </div>
  );
});


export default AccountPopup;
