
import ChatMessage from "./ChatMessage";
import './Chatbot.css'


function Chatbot({ messages }){
   
   
  return(<div className="chat-messages-container">
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