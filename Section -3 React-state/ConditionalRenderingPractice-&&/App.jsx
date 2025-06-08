import { useState } from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = useState(["a", "b"])
    
    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */
    
    return (
        <div>
            {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
            {unreadMessages.length === 0 && <h1>You have NO unread messages!</h1>}

        </div>
    )
}
