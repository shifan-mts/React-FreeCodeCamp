import { useState } from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown,toggleShown] = useState(false);
    console.log(isShown)
    function handleClick(){
        toggleShown(
            n => !n
        )
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{isShown && props.punchline}</p>
            <button onClick={handleClick}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>
            <hr />
        </div>
    )
}