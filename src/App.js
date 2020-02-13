import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { init, sign } from "./keycard";

function App() {
  const [messages, setMessages] = useState([]);

  const log = useCallback(
    (message, param) => {
      let text = message;

      console.log(message);
      if (param) {
        console.log(param);
        text = `${text} ${JSON.stringify(param)}`
      }


      setMessages(messages => [
        ...messages,
        {
          time: new Date().toLocaleDateString('default', { hour: 'numeric', minute: 'numeric', second: 'numeric' }),
          text: text,
        },
      ]);

      window.scrollTo(0, document.body.scrollHeight);
    },
    [setMessages],
  );

  useEffect(() => {
    init(log);
  }, [log]);

  const onSign = (event) => {
    event.preventDefault();
    sign(log);
  };

  return (
    <div className="app">
      <div className="header">
        <button onClick={onSign} className="btn">
          Sign
        </button>
      </div>
      <div className="messages">
        {messages.map((m, key) => <div key={key} className="message">
          <div className="time">{m.time}</div>
          <div className="text">{m.text}</div>
        </div>)}
      </div>
    </div>
  );
}

export default App;
