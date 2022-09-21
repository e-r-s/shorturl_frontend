import React, { Component, useRef, useState, forwardRef, useImperativeHandle, useEffect }  from 'react';
 

function Notification({title, text}) {
 
  const [showNotification, setShowNotification] = useState(true); 
 
  const onNotificationClicked = ( ) =>{
    setShowNotification(false);
  }
  const onNotificationCloseClicked = ( ) =>{
    setShowNotification(false);
  }
 

  if(showNotification){
    return <div className="notification">  
              <div className="title"  onClick={()=>onNotificationClicked()}>   
                {title}
              </div>
              <div className="desc">   
                {text}
              </div> 
              <div className="close" onClick={()=>onNotificationCloseClicked()}>x</div> 
          </div>  
  }
  else{
    return null;
  }
 
}
let lastTimeout = 0;
const Notifications = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    notify:notify
  }));
  
  const [notifications, setNotifications] = useState([]);  

  useEffect(() => {
     
        if(lastTimeout){
            clearInterval(lastTimeout);
        }
        lastTimeout = setInterval(()=>{     
          var newNotifications = [...notifications.filter(n=> {  return n.endless || n.endTime>new Date().getTime() })];
          if(notifications.length==newNotifications.length){
            return;
          }
          setNotifications(newNotifications);
        }, 1000);
  }, [notifications]);

  const notify = ({title, text, time })=>{
 
    var endTime = new Date().getTime() + ((time * 1000 ) || 100000000);
     notifications.push({ title, text, endTime, time, endless:time==0 || !time });
    setNotifications([...notifications]);
    if(time>0){ 
      if(lastTimeout){ 
      }
    
    }
  }; 
   
 
 


  return ( 
    <div className="notifications">  
        {notifications.map((n,i)=> <Notification key={i} title={n.title} text={n.text} /> )} 
        
    </div>
    
  );
});

export default Notifications;
