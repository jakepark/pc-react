import React, { Component } from 'react';
import './App.css';



class Dancers extends Component {
  render() {
    const DANCERS_ARRAY = [
      {name_first: "Alpha", name_last: "AbleLast", url: "url1", url_text:"url_text"},
      {name_first: "Bravo", name_last: "BakerLast", url: "url2", url_text:"url_text"},
      {name_first: "Charlie", name_last: "CharlieLast", url: "url3", url_text:"url_text"},
      {name_first: "Delta", name_last: "DogLast", url: "url4", url_text:"url_text"},
      {name_first: "Echo", name_last: "EasyLast", url: "url5", url_text:"url_text"},
      {name_first: "Foxtrot", name_last: "FoxLast", url: "url5", url_text:"url_text"},
      {name_first: "Golf", name_last: "GeorgeLast", url: "url5", url_text:"url_text"},
      {name_first: "Hotel", name_last: "HowLast", url: "url5", url_text:"url_text"}
    ];
    
    return (
      <div id="dancers" className="dancers-list">
      
      {DANCERS_ARRAY.map(function(dancer, i) {
        return (
          <div className="dancer" key={i}>
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