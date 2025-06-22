import { useEffect, useState } from "react"

export default function Main() {
   /**
     * Challenge:
     * Get an array of memes from the imgflip API as soon as
     * this component renders for the first time.
     * Check the imgflip documentation for the correct URL.
     * Save the array of memes (not the whole response
     * data) to state. (For this app, we'll randomly choose
     * one of the memes from this array when the user clicks
     * the "Get a new meme image" button, but we'll do that in
     * a separate challenge.)
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    

    const [meme,setMeme] = useState({
        topText: "One does not simply",
        bottomText : "Walk into Mordor",
        imgUrl : 'http://i.imgflip.com/1bij.jpg'
    })

    const [Imgs,setImgs] = useState()

    useEffect(()=>{

        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setImgs(data.data.memes))
    },[])
    
   function handleChange(event){
    const {name,value} = event.currentTarget
    setMeme(
        (prev)=>(
            {
                ...meme,
                [name]:value
            }
        )
    )
   }
   
    return (
        <main>
            <form className="form" >
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value = {meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}