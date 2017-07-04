import React from 'react';

let Image = function statelessFunctionComponentClass(props){
  let source = "./images/" + props.source;
  
  let style = {
    
  };
  
  return (
    <img src={source} style={style} alt=""/>
  );
}

export default Image;