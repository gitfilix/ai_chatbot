import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import ChatBotStart from "./Components/ChatBotStart"
import ChatBotApp from "./Components/ChatBotApp"

const App = () => {
  // chat state: switching view between chat start and chat app
  const [isChatting, setIsChatting] = useState(false)
  // chat state handle
  const [chats, setChats] = useState([])
  // keep track of the active chat
  const [activeChat, setActiveChat] = useState(null)

  const handleStartChat = () => {
    // TODO: lets wait for 250ms before we start chatting
      setIsChatting(true)
    
    if (chats.length === 0) {
      createNewChat()
      setChats([newChat])
    }
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  const createNewChat = () => {
    // create a new chat object
    const newChat = {
      id: uuidv4(),
      displayId: `Chat ${new Date().toLocaleDateString('de-DE')} ${new Date().toLocaleTimeString()}`,
      messages: [],
    }

    const updatedChats = [newChat, ...chats]
    setChats(updatedChats)
    setActiveChat(newChat.id)
  }

  return (
    <div className='container'>
      {isChatting 
      ? (<ChatBotApp 
          onGoBack={handleGoBack}
          chats={chats}
          setChats={setChats}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          onNewChat={createNewChat}
          />) 
      : (<ChatBotStart onStartChat={handleStartChat} />)
    }
    </div>
  )
}

export default App
