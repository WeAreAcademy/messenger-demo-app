import { useState } from 'react';

import { MessageI } from '../types/MessageI';
import ChatInput from './ChatInput';
import ChatMessageBubbleReceived from './ChatMessageBubbleReceived';
import ChatMessageBubbleSent from './ChatMessageBubbleSent';

const initialMessages = [
  { text: "Hi", userId: "123" },
  { text: "Hello", userId: "234" },
  { text: "How are you doing?", userId: "234" },
  { text: "Is all ok?", userId: "234" },
  { text: "Yh and you?", userId: "123" },
  { text: "All good?", userId: "123" },
  { text: "Yeah", userId: "234" },
  { text: "Ok, bye", userId: "123" },
  { text: "Bye", userId: "234" },
];

export default function Chat() {
  const [messages, setMessages] = useState<MessageI[]>(initialMessages);
  // const [lastMessage, setLastMessage] = useState<MessageI>({
  //   text: "",
  //   userId: "",
  // });
  const userId = "123";

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          background: "#f3f3f3",
          width: "100%",
          height: "20px",
        }}
      >
        {messages[messages.length - 1].text}
      </div>
      <div style={{ marginBottom: "66px" }}>
        {messages.map((message) => {
          return message.userId === userId ? (
            <ChatMessageBubbleSent text={message.text} />
          ) : (
            <ChatMessageBubbleReceived text={message.text} />
          );
        })}
      </div>
      <ChatInput setMessages={setMessages} userId={userId} />
    </>
  );
}
