import { useState } from "react";

function Pad(props){


    return <>

        <button 
            onClick={()=>props.click(props.id)}
            className={props.on ? "on" : null} 
            style={{backgroundColor:props.color}}
          
        >
        
      

        </button>
    </>
}

export default Pad;
