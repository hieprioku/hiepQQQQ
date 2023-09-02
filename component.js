import React, { Component, useState } from 'react'
ColorBox.prototype ={};
function ColorBox(props){
    const [color,setColor] = useState("white");
  
    return (
      <div>{color}
      <button onClick={()=> setColor ("thay đổi màu đen")}>black</button>
      <button onClick={()=> setColor ("thay đổi màu trắng")}>white</button>
      </div>
    )
  }

export default ColorBox;