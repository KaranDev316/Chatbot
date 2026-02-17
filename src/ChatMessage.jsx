import user from "./assets/user.svg";
import robot from "./assets/robot.svg";
import './ChatMessage.css';
function ChatMessage({ message, sender }){
   

  
    return(
        <div className='chat-message-container'>
            <div className="chat-message-robot">
                {sender == 'robot' &&  <img src={robot} alt="" width="50" className='message-container-robot'/>}
                {sender == 'robot' && <p className="text-message"> {message}</p>} 
            </div>

            <div className="chat-message-user"> 
                {sender == 'user' && <p className="text-message"> {message}</p>} 
                {sender == 'user' && <img src={user} alt="" width="50" className='message-container-user'/> }
            </div>
        </div>
    )
}

export default ChatMessage