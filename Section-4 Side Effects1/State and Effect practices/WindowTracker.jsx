import React, { useEffect, useState } from "react"

export default function WindowTracker() {
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        function WidthWindow(){
            console.log("resized")
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',WidthWindow)
        return ()=> {
            console.log("cleaning up...")
            window.removeEventListener('resize',WidthWindow)}
        }
        ,[]
    )
    return (
        <h1>Window width: {width}</h1>
    )
}
