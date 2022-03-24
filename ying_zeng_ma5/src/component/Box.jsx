import React, { useState } from "react";
import './Box.css';


function Box(props){
    let className = "box";
    const [clickState, setClickState] = useState(false);

    let count = 0;

    console.log(props);
    if(clickState){
        className = "box black";
    }

    function clickBox(){
        if(!clickState){
            setClickState(true);
            props.updateCount(1);
        }else{
            setClickState(false);
            props.updateCount(-1);
        }
    }
    
    return (
        <div class={className} onClick={() => clickBox()}>
            </div>
    )
}    

export default Box;