import React, { useEffect } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    /**
     * Challenge part 1:
     * Fetch the data from this url: "https://swapi.dev/api/people/1"
     * and save it in the starWarsData state. Make sure you don't
     * get stuck in an infinite rendering loop!
     */

    useEffect(function(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data)) }, [count]
    )
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}