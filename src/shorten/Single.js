import './Shorten.scss';
import ShortUrlList from './ShortUrlList';
import React, { Component, useRef, useState } from 'react';

import lib from 'url_shortening_lib';
import { api } from './Shorten.Api';

const StringHelpers = lib.StringHelpers;

function Single() {

  const textRef = useRef();
  const listRef = useRef(null);
  const [isWrongInput, setIsWrongInput] = useState(false);
  const [startShaking, setStartShaking] = useState(false);

  let defaultItems = [];

  const shortenUrlClicked = () => {
    let url = textRef.current.value;
    if (!StringHelpers.isUrl(url)) {
      setIsWrongInput(true);
      setStartShaking(true);
      setTimeout(() => {
        setStartShaking(false);
      }, 500);
      return;
    }
    setIsWrongInput(false);
    api.post(window.VARS.apiUrl, { url: url }).then((data) => {
      if (data) {
        urlShortened();

        listRef.current.onNewItemAdded(data);
      }
    });

  }


  // const readMetaContent =  ({parentElement, property, name, type}) =>{
  //   var selector = "";
  //   if(property){
  //     selector= 'property="'+property+'"';
  //   }
  //   if(name){
  //     selector= 'name="'+name+'"';
  //   }
  //   if(type){
  //     selector= 'type="'+type+'"';
  //   }
  //   return parentElement.querySelector('meta['+selector+']').getAttribute('content');

  // }
  // const readMetas = (url) =>{
  //   var iframe = document.createElement('iframe');
  //   iframe.src = url; 
  //   console.log(iframe);

  //   api.getHtml(url).then((data)=>{
  //     var div = document.createElement('div');
  //     div.innerHTML = data;
  //     var metaContent = {
  //         title: readMetaContent({parentElement:div, name:'title'}),
  //         description: readMetaContent({parentElement:div, name:'description'}),
  //         author: readMetaContent({parentElement:div, name:'author'}),

  //         og_locale: readMetaContent({parentElement:div, property:'og:locale'}),
  //         og_type: readMetaContent({parentElement:div, property:'og:type'}),
  //         og_url: readMetaContent({parentElement:div, property:'og:url'}),
  //         og_title: readMetaContent({parentElement:div, property:'og:title'}),
  //         og_description: readMetaContent({parentElement:div, property:'og:description'}),
  //         og_site_name: readMetaContent({parentElement:div, property:'og:site_name'}),
  //         og_image: readMetaContent({parentElement:div, property:'og:image'}),

  //         twitter_card: readMetaContent({parentElement:div, name:'twitter:card'}),
  //         twitter_domain: readMetaContent({parentElement:div, name:'twitter:domain'}),
  //         twitter_title: readMetaContent({parentElement:div, name:'twitter:title'}),
  //         twitter_description: readMetaContent({parentElement:div, name:'twitter:description'}),

  //         article_publisher: readMetaContent({parentElement:div, property:'article:publisher'}),
  //         article_modified_time: readMetaContent({parentElement:div, property:'article:modified_time'}),
  //         article_published_time: readMetaContent({parentElement:div, property:'article:published_time'}) 
  //     }

  //     var pageData={
  //         title: div.querySelector('title').innerHTML,
  //         meta:metaContent
  //     }

  //     console.log(pageData);
  //   });  


  // }

  const urlShortened = () => {
    textRef.current.value = '';
  }


  return (
    <div className="  shorten">

      <div className={'shorten-input ' + (startShaking ? ' wrong ' : '')}>
        <textarea ref={textRef} placeholder="Paste Your Url starting with http/https/ftp" className="shorten-text"></textarea>
        <div className="shorten-button button button-gray" onClick={() => shortenUrlClicked()}>Shorten</div>
      </div>
      {isWrongInput ?
        <div className="warning-text">
          Please type a valid url starting with http/https/ftp
        </div>
        : null}

      <div className="shorten-desc">
        By clicking SHORTEN, you are agreeing to our <a target="_blank" href="#">Terms of Service</a>, <a target="_blank" href="#">Privacy Policy</a> and <a target="_blank" href="#">Acceptable Use Policy</a>
      </div>
      <br />
      <br />
      <ShortUrlList ref={listRef} items={defaultItems} />
    </div>
  );
}

export default Single;
