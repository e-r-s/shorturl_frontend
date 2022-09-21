import React, {   useRef, useState , useEffect}  from 'react';
import QRCode from './qrcode.min.js';
 
import './QrCode.scss';

function QrCode({url}) {
  const [qrColor, setQrColor] = useState('#666666');
  const [qrLogo, setQrLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('Choose File');
 
  const downloadRef = useRef(); 
  const qrCodeRef = useRef(); 
  const fileRef = useRef(); 
  let qrCode;
  
  useEffect(() => { 
    reDraw({logo:qrLogo, color:qrColor});
    // setTimeout(()=>setLoading(false),500);
  }, []);

  const onLogoChanged = (e) =>{ 
    
    const [file] = e.target.files;
    if (file) { 
      setFileName('File: '+file.name);
      var reader = new FileReader();
      reader.onload = function(){  
        setQrLogo(reader.result); 
        reDraw({logo:reader.result, color:qrColor});
      };
      reader.readAsDataURL(file); 
    
    } 
  }
  
  const reDraw = ({logo, color})=>{ 
        if(qrCodeRef.current.children.length>0){
          qrCodeRef.current.innerHTML = '';
          // qrCodeRef.current.removeChild(qrCodeRef.current.children[0]);
          // qrCodeRef.current.removeChild(qrCodeRef.current.children[0]);
        }
        qrCode = new QRCode(qrCodeRef.current, {
          text: url,
          width: 256,
          height: 256,
          colorDark : color || qrColor,
          colorLight:'#f2f2f2'
        });
      

        const icon = new Image();
        icon.onload = function () {
        //  console.log('qrCode._oDrawing', qrCode._oDrawing);
          var qrCanvas = qrCode._oDrawing._elCanvas;
          var centerImage = this;
          var factor = 0.25;
        
          var h = qrCanvas.height;
          //Center size
          var cs = h * factor;
          //Center offset
          var co = (h - cs) / 2;
          var ctx = qrCanvas.getContext("2d");
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(co, co, cs,cs);
          ctx.drawImage(centerImage, 0, 0, centerImage.width, centerImage.height, co, co, cs, cs);
           qrCode._oDrawing._elImage.src = qrCanvas.toDataURL('image/png');
          updateDownloadLink();
        }
        if(logo || qrLogo){ 
          icon.src = logo || qrLogo;
        }
        else{
          updateDownloadLink();
        }
  }

  const updateDownloadLink = () => {
    downloadRef.current.href =  qrCode._oDrawing._elCanvas.toDataURL('image/png');
    console.log(qrCode._oDrawing._elImage); 
    downloadRef.current.download = "QRCode_Short_Url";
  }


  const onColorChanged = (e) =>{  
     setQrColor( e.target.value);
     reDraw({logo:qrLogo, color:e.target.value});
  }
   

  const chooseFile = (e) =>{  
    fileRef.current.click();
 }

  return ( 
    <div className={'qrcode' + (loading?' loading ':'')}> 
    <div className="qrcode-inner"> 
        <div className="qrcode-container" ref={qrCodeRef}> 
        </div>  

        <div className="qrcode-panel"> 


              <div className="setting" >
                  <div className="label" >Color</div> 
                  <div className="value" >
                    <select  onChange={(e)=>onColorChanged(e)}>
                      <option value="#666666">Light Gray</option>
                      <option value="#000000">Black</option>
                      <option value="#354A54">Gray</option>
                      <option value="#40A4E8">Blue</option>
                      <option value="#F2627A">Red</option>
                      <option value="#3C897B">Green</option>
                      <option value="#A04E9B">Purple</option>
                      <option value="#793200">Brown</option>
                    </select>
                  </div> 
              </div> 

              <div className="setting file"  onClick={(e)=>chooseFile(e)}>
                  <div className="label" >Logo</div> 
                  <div className="value">
                    <input type="file" placeholder="QR Code Text" ref={fileRef} onChange={(e)=>onLogoChanged(e)} />
                    <div className="file-name" >{fileName}</div>
                  </div> 
              </div> 
          
         </div> 

       
    </div> 
         <a className="download-button " ref={downloadRef} >Download</a>   
    </div> 
  );
}

export default QrCode;
