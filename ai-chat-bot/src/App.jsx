import React, { useState } from "react"
import ChatBotStart from "./Components/ChatBotStart"
import ChatBotApp from "./Components/ChatBotApp"

const App = () => {
  const [isChatting, setIsChatting] = useState(false)

  const handleStartChat = () => {
    // lets wait for 250ms before we start chatting
    setTimeout(() => {
      setIsChatting(true)
    }, 250)
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  return (
    <div className='container'>
      {isChatting 
      ? (<ChatBotApp onGoBack={handleGoBack} />) 
      : (<ChatBotStart onStartChat={handleStartChat} />)
    }
    </div>
  )
}

export default App
