
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import './Chatbot.css'


function Chatbot({ messages }){
  const chatMessagesRef = useRef(null);
   useEffect(()=>{
  const containerElem =  chatMessagesRef.current;
  if(containerElem){
     containerElem.scrollTop = containerElem.scrollHeight;
  }
   },[messages]);
   
  return(<div className="chat-messages-container" ref={chatMessagesRef}>
   {
         (messages.map((chatMessage)=>{
          return(
            <ChatMessage 
                message = {chatMessage.message}
                sender = {chatMessage.sender}
                key={chatMessage.id}
            />
          );
        })
    )

    }
    
      </div>      
  );

}

export default Chatbot