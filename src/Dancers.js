import React, { Component } from 'react';
import './App.css';
import Image from './Image'


class Dancers extends Component {
  constructor(props, context){
    super(props, context);
    this.createImage = this.createImage.bind(this);
  }
  
  createImage(image) {
    console.log('createImage')
    return <Image source={image} key={image} />;
  };
  
  createImages(images) {
    return images.map(this.createImage);
  };

  
  render() {
    const DANCERS_ARRAY = [
      {name_first: "Alpha", name_last: "AbleLast", url: "url1", url_text:"url_text", img_url: "pic_1.jpeg"},
      {name_first: "Bravo", name_last: "BakerLast", url: "url2", url_text:"url_text", img_url: "pic_2.jpeg"},
      {name_first: "Charlie", name_last: "CharlieLast", url: "url3", url_text:"url_text", img_url: "pic_1.jpeg"},
      {name_first: "Delta", name_last: "DogLast", url: "url4", url_text:"url_text", img_url: "pic_1.jpeg"},
      {name_first: "Echo", name_last: "EasyLast", url: "url5", url_text:"url_text", img_url: "pic_2.jpeg"},
      {name_first: "Foxtrot", name_last: "FoxLast", url: "url5", url_text:"url_text", img_url: "pic_2.jpeg"},
      {name_first: "Golf", name_last: "GeorgeLast", url: "url5", url_text:"url_text", img_url: "pic_1.jpeg"},
      {name_first: "Hotel", name_last: "HowLast", url: "url5", url_text:"url_text", img_url: "pic_2.jpeg"},
    ];
    
    return (
      <div id="dancers" className="dancers-list">
      
      {DANCERS_ARRAY.map(function(dancer, i) {
        
        var dancer_img = dancer.img_url;
        var img_src = "/assets/" + dancer_img;
        console.log(img_src);
        
        return (
          <div className="dancer" key={i}>

          <img src={require('./assets/pic_1.jpeg')}></img>
          console.log({this})
          {this.createImage(dancer.img_url)}
          
          <div>{dancer.name_first} {dancer.name_last}</div>
          <a href="{dancer.url}">{dancer.url_text}</a>
          </div>
        )
      })}

      </div>
      
    );
  }
}

export default Dancers;