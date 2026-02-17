
import ChatMessage from "./ChatMessage";

function Chatbot({ messages }){
   
   
  return(<>
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
    
      </>      
  );

}

export default Chatbot