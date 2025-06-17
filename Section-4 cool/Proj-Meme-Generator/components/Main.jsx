import { useState } from "react"

export default function Main() {
    /* const [topText,settopText] = useState('');
    const [downText,setdownText] = useState('Walk into Mordor');
    const [imgUrl,setimgUrl] = useState('http://i.imgflip.com/1bij.jpg');
     */

    const [meme,setMeme] = useState({
        topText: "One does not simply",
        downText : "Walk into Mordor",
        imgUrl : 'http://i.imgflip.com/1bij.jpg'
    })
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imgUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.downText}</span>
            </div>
        </main>
    )
}