import Chatbot from "./ChatBot";
import ChatInput from "./ChatInput"
import { useState } from "react";
import './App.css'
function App() {
   
     const chatMessages = []
      
    
  const [messages, setMessage] = useState(chatMessages);

  return (
    <div className="app-container">
      <Chatbot  messages={messages}/>
      <ChatInput messages={messages} setMessage={setMessage}/>
    </div>
  )
}

export default App
