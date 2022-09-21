 
import React from 'react'; 
 

const { Fragment, useState, useEffect, forwardRef, useRef, useImperativeHandle } = React;


const Popup = (props) => { 

  const [showPopup, setShowPopup] = useState(false);
  const closePopup = ()=>{
    // setShowPopup(false);
    props.onPopupHide();
  }
  
  return (
    <div className='popup-bg '>
        <div className='popup'  style={{maxWidth:props.maxWidth}}>
          <div className='popup-header'>{props.title}</div> 
          <div className='popup-close' onClick={closePopup}>x</div> 
          {props.children}
        </div>
    </div>
  )

}




export default Popup;
