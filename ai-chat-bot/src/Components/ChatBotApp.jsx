import React from 'react'
import './ChatBotApp.css'

const ChatBotApp = () => {
  return (
    <div className='chat-app'>
      <div className='chat-list'>
        <div className='chat-list-header'>
          <h2>Chat List</h2>
          <i className='bx bx-edit-alt new-chat'></i>
        </div>
        <div className='chat-list-item active'>
          <h4>chat 20/07/2025 12:43:43 PM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
        <div className='chat-list-item'>
          <h4>chat 20/07/2025 12:43:43 PM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
        <div className='chat-list-item'>
          <h4>chat 20/07/2025 12:43:43 PM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
      </div>
      <div className='chat-window'>
        <div className='chat-title'>
          <h2>Chat with AI</h2>
          <i className='bx bx-arrow-back arrow'></i>
        </div>
        <div className='chat'>
          <div className='prompt'>
            <p>Hi, I am AI chatbot. How can I help you today?</p>
            <span>20/07/2025 12:43:43 PM</span>
          </div>
          <div className='response'>
            <p>Hello, I am just a computer programm but I can assist you. how can I help you?</p>
            <span>20/07/2025 12:43:43 PM</span>
          </div>
          <div className="typing">Typing... </div>
        </div>
        <form className='msg-form'>
          <i className='fa-solid  fa-face-smile emoji'></i>
          <input type='text' placeholder='Type a message' />
          <i className='fa-solid fa-paper-plane'></i>

        </form>
      </div>
    </div>
  )
}

export default ChatBotApp