 import './Shorten.scss'; 
 import React, { Component, useImperativeHandle, forwardRef,useState }  from 'react';

 
 import ShortUrlListItem from './ShortUrlListItem';

 import lib from 'url_shortening_lib';  
 const StringHelpers = lib.StringHelpers;



const ShortUrlList =  forwardRef((props, ref) => {

  const [items, setItems] = useState(props.items);
  // const [canCopy, setCanCopy] = useState(true);
  // const [showAllSettings, setShowAllSettings] = useState(false);
  


  // useEffect(() => {
  //   setTimeout(()=>{
      
  //   },200);
    
  // }, []);


  useImperativeHandle(ref, () => {
      return {
        onItemsChanged: onItemsChanged,
        onNewItemAdded:onNewItemAdded
      }
  }); 

  const onItemsChanged = (newItems) => {   
    setItems([...newItems]); 
  }; 

  const onNewItemAdded = (newItem) => {  
    
    setItems([newItem, ...items.filter(i=>i.hash!=newItem.hash)]); 
  };


  // const onCopyClicked =(str) =>{ 
  //       StringHelpers.copyToClipboard(str).then(AS => {
  //         setCanCopy(true); 
          
  //       })
  //       .catch(error => {
  //         setCanCopy(false);
  //       }); 
  // }

  // const onSettingsClicked =(str) =>{ 
  //     setShowAllSettings(!showAllSettings);
  // }

  let shortUrl = window.VARS.shortUrl;
  
  return (
    <div className="shorturl-list">
         {items.map(i=> <ShortUrlListItem item={i} key={i.hash} /> )}
{/*          
        {items.map(i=>
          <div className="item" key={i.hash}>
            <div className="head" >
                  <div className="url" title={i.url}>{i.url}</div>
                  <div className="short-url"><a target="_blank" href={shortUrl+i.uid}>{shortUrl+i.uid}</a> </div>
                  {canCopy? 
                    null:
                    <div className="short-url"><input readOnly={true} value={shortUrl+i.uid} /> </div>
                  }
                  <div className="copy button button--sub" onClick={()=> onCopyClicked(shortUrl+i.uid)}>Copy</div>
                  <div className="more button button--gray" onClick={()=> onSettingsClicked()}>Settings</div>
            </div>
            {showAllSettings?
              <div className="all-settings" >
                    <div className="settings" >
                    <div className="settings-inner" >
                          <div className="setting-item checked selected" >Get QR Code</div>
                          <div className="setting-item checked" >Password Protected</div>
                          <div className="setting-item checked" >Citation</div>
                          <div className="setting-item" >Use Proxy</div>
                          <div className="setting-item" >Enable Tracking</div> 
                    </div>
                    </div>

                    <QrCode url={shortUrl+i.uid} />
                    <div className='password'>

                    </div>
                    
                    <br/>
              </div>
            :null}

            
          </div>
          )} */}

          
    </div>
  );
});

export default ShortUrlList;
