import { useState } from 'react';

import { MessageI } from '../types/MessageI';

type Props = {
  userId: string;
};

export default function ChatInput({ userId }: Props) {
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const handleSend = () => {
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        borderTop: "1px solid #f3f3f3",
        width: "100%",
        paddingTop: "8px",
        position: "fixed",
        bottom: "0",
        left: "0",
        background: "white",
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: "#f3f3f3",
          borderRadius: "24px",
          padding: "16px",
          border: "none",
          marginRight: "16px",
        }}
      />

      <button
        onClick={handleSend}
        onMouseOver={() => {
          setButtonText("Are you sure?");
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
