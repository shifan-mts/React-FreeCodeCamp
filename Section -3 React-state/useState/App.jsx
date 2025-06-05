import { useState } from "react"

export default function App() {
    
   
    let [var1,changeVar]= useState("Yes or no")
    function handleSubmit(){
        changeVar("cool");
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value" onClick={handleSubmit}>{var1}</button>
        </main>
    )
}
