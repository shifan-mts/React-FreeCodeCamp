import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState([])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */
    return (
        <div>
            <h1>
            {messages.length > 0 ? 
            (messages.length > 1 ? "You have "+messages.length+ " unread messages" : "You have "+messages.length+ "unread message") 
            : "You're all caught up!"
            }
            
            </h1>
        </div>
    )
}
