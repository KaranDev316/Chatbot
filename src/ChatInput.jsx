import {  useState } from "react";



function ChatInput({messages, setMessage}){
    const [inputText, setInputText] = useState(" ");
    
    function handleMessage(event){
       
        setInputText(event.target.value);      
    }
const response = window.Chatbot.getResponse(inputText);
function sendMessage(){
   const  prevMessage= [...messages,{
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
       }]
   
       setMessage(prevMessage);
            setMessage([...prevMessage,{
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
        }]);

       setInputText("");    
}

function handleKeyDown(event){
    if(event.key == 'Enter'){
        sendMessage();
    }
    if(event.key == 'Escape'){
            setInputText("");
        }
}

    return(
        <div className='input-container'>
            <input className='chat-input'
                type="text" 
                placeholder="Send a message to Chatbot" 
                size="50"  
                onChange={handleMessage} 
                value={inputText}    
                onKeyDown={handleKeyDown}  
               
             />
            <button onClick={sendMessage} className="send-btn">Send </button>
            
        </div>
    )

}

export default ChatInput;