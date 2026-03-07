import { useEffect, useState } from "react";
import Chatbot from "./ChatBot";
import ChatInput from "./ChatInput";
import AuthForm from "./AuthForm";
import { getMe } from "./api";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [messages, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuthChecked(true);
      return;
    }
    getMe()
      .then((data) => setUser(data.user))
      .catch(() => localStorage.removeItem("token"))
      .finally(() => setAuthChecked(true));
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    setMessage([]);
  }

  if (!authChecked) return null; // brief loading

  if (!user) {
    return <AuthForm onAuth={setUser} />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <span>Hi, {user.username}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <Chatbot messages={messages} isLoading={isLoading} />
      <ChatInput
        messages={messages}
        setMessage={setMessage}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
