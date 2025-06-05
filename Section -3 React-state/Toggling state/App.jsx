import { useState } from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    let [going,goingOut] = useState(true);
    let [permission,setPermission] = useState("Yes");
    function handleSubmit(){
        
        if(going==true){
            
            goingOut(false);
            setPermission("No");
        }
        else{
         
            goingOut(true);
            setPermission("Yes");
        }
        
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleSubmit}>{permission}</button>
        </main>
    )
}
