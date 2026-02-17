

function ChatMessage({ message, sender }){
   

  
    return(
        <div className='chat-message-container'>
            <div className="chat-message-robot">
                {sender == 'robot' &&  <img src="../robot.png" alt="" width="50" className='message-container-robot'/>}
                {sender == 'robot' && <p> {message}</p>} 
            </div>

            <div className="chat-message-user"> 
                {sender == 'user' && <p> {message}</p>} 
                {sender == 'user' && <img src="../user.png" alt="" width="50" className='message-container-user'/> }
            </div>
        </div>
    )
}

export default ChatMessage