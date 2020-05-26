import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { init, signPayment, signRedeem } from "./keycard";

function App() {
  const [messages, setMessages] = useState([]);

  const log = useCallback(
    (message, ...params) => {
      let text = message;
      console.log(message);

      (params || []).forEach(p => {
        if (p) {
          text = `${text} ${JSON.stringify(p)}`
        }
        console.log(p);
      })

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

  const onSignPayment = (event) => {
    event.preventDefault();
    signPayment(log);
  };

  const onSignRedeem = (event) => {
    event.preventDefault();
    signRedeem(log);
  };

  return (
    <div className="app">
      <div className="header">
        <button onClick={onSignPayment} className="btn">
          Sign Payment
        </button>

        <button onClick={onSignRedeem} className="btn">
          Sign Redeem
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
