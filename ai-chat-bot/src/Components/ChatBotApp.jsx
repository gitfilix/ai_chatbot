import React, { useState } from 'react'
import './ChatBotApp.css'

const ChatBotApp = ({ onGoBack, chats, setChats }) => {
  console.log('chats', chats)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState(chats[0]?.messages || [])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const sendMessage = () => {
    if(inputValue.trim() === '') return
    
    // create a new message
    const newMessage = {
      type: 'prompt',
      text: inputValue,
      timestamp: new Date().toLocaleString()
    }

    // update the messages with the new message
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    
    // clear the input field by setting the input field value to an empty string
    setInputValue('')

    // updatedChats: update the chats with the new messages, if the chat is the first chat
    // in the chats array, update the messages with the updated messages
    const updatedChats = chats.map((chat, index) => {
      // if the chat is the first chat in the chats array we update the messages
      if (index === 0) {
        return {
          ...chat,
          messages: updatedMessages
        }
      }
      // otherwise we return the chat as it is
      return chat
    })
    setChats(updatedChats)
  }

  // keyboard event listener for enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className='chat-app'>
      <div className='chat-list'>
        <div className='chat-list-header'>
          <h2>Chat List</h2>
          <i className='bx bx-edit-alt new-chat'></i>
        </div>
        {chats.map((chat, index) => (
            <div 
              key={chat.id} 
              className={`chat-list-item ${index === 0 ? 'active' : ''}`}>
              <h4>Chat Id:{chat.id}</h4>
              <i className='bx bx-x-circle'></i>
            </div>
        ))}
      </div>
      <div className='chat-window'>
        <div className='chat-title'>
          <h2>Chat with AI</h2>
          <i className='bx bx-arrow-back arrow'
             onClick={onGoBack}>
          </i>
        </div>
        <div className='chat'>
            {messages.map((msg, index) => (
              <div key={index} className={msg.type === 'prompt' ? 'prompt' : 'response'}>
                <p>{msg.text}</p>
                <span>{msg.timestamp}</span>
              </div>
            ))}
          <div className='response'>
            <p>Hello, I am just a computer programm but I can assist you. how can I help you?</p>
            <span>20/07/2025 12:43:43 PM</span>
          </div>
          <div className="typing">Typing... </div>
        </div>
        <form className='msg-form'
          onSubmit={(e) => {
            e.preventDefault()
            sendMessage()
          }}>
          <i className='fa-solid  fa-face-smile emoji'></i>
          <input 
            type='text' 
            placeholder='Ask me anything... FLX chatbot may help you - or not'  
            className='msg-input' 
            value={inputValue} 
            onChange={handleInputChange} />
          <i 
            className='fa-solid fa-paper-plane' 
            onClick={sendMessage}>
            </i>
        </form>
      </div>
    </div>
  )
}

export default ChatBotApp