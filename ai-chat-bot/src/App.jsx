import React, { useState } from "react"
import ChatBotStart from "./Components/ChatBotStart"
import ChatBotApp from "./Components/ChatBotApp"

const App = () => {
  // chat state: switching view between chat start and chat app
  const [isChatting, setIsChatting] = useState(false)
  // chat state handle
  const [chats, setChats] = useState([])

  const handleStartChat = () => {
    // lets wait for 250ms before we start chatting
    setTimeout(() => {
      setIsChatting(true)
    }, 250)

    if (chats.length === 0) {
      const newChat = {
        id: `Chat ${new Date().toLocaleStringDateString('de-DE')} ${new Date().toLocaleTimeString()}`,
        messages: [],
      }
      setChats([newChat])
    }
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  return (
    <div className='container'>
      {isChatting 
      ? (<ChatBotApp 
          onGoBack={handleGoBack}
          chats={chats}
          setChats={setChats}
          />) 
      : (<ChatBotStart onStartChat={handleStartChat} />)
    }
    </div>
  )
}

export default App
