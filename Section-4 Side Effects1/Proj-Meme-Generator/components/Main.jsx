import { useEffect, useState } from "react"

export default function Main() {
  /**
     * Challenge: Get a random image from the array of
     * allMemes when the user clicks the button. Once
     * you've gotten a random image from the array, make
     * sure to write the code that will display that
     * random meme image to the page.
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
        .then(data => {setImgs(data.data.memes)
            /* console.log(data.data.memes[0].url) */
    })
        
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

   function changeMeme(event){
    event.preventDefault()
    let randomNo = Math.floor(Math.random() * 100)
  setMeme(
    (prev)=>(
        {
            ...prev,
            imgUrl : Imgs[randomNo].url
        })
    

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
                        required
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value = {meme.bottomText}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button 
                onClick={changeMeme}
                name="imgUrl"
                
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}