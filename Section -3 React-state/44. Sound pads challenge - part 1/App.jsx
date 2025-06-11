import { useState } from "react"
import pads from "./pads"
import Pad from "./Pad"

export default function App() {
    /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */

    

    const [pad,setPad] = useState(pads)
    function toggle(id1){
        setPad(n=>n.map(i=>{
            return i.id === id1 ? {...i,on:!i.on} : i
        }


        ))
    
    
    }
    return (
        <main>
            <div className="pad-container">
                {pad.map((n)=> 
                
                <Pad color = {n.color} key={n.id} id={n.id}  on={n.on} click={toggle}/>
                )}
                
            </div>
        </main>
    )
}
