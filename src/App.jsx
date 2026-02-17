import Chatbot from "./ChatBot";
import ChatInput from "./ChatInput"
import { useState } from "react";

function App() {
   
     const chatMessages = []
      
    
  const [messages, setMessage] = useState(chatMessages);

  return (
    <>
      <Chatbot  messages={messages}/>
      <ChatInput messages={messages} setMessage={setMessage}/>
    </>
  )
}

export default App
