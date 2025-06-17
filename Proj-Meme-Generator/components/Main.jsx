import { useState } from "react"

export default function Main() {
    const [topText,settopText] = useState('One does not simply');
    const [downText,setdownText] = useState('Walk into Mordor');
    const [imgUrl,setimgUrl] = useState('http://i.imgflip.com/1bij.jpg');
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
                <img src={imgUrl} />
                <span className="top">{topText}</span>
                <span className="bottom">{downText}</span>
            </div>
        </main>
    )
}