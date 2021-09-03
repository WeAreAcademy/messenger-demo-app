import { useEffect, useState } from 'react';

import getAllMessages from '../server/getAllMessages';
import getAllUsers from '../server/getAllUsers';
import { MessageI } from '../types/MessageI';
import { UserI } from '../types/UserI';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';
import ChatMessageBubbleReceived from './ChatMessageBubbleReceived';
import ChatMessageBubbleSent from './ChatMessageBubbleSent';

export default function Chat() {
  const [messages, setMessages] = useState<MessageI[]>([]);
  const [users, setUsers] = useState<UserI[]>([]);

  async function getMessages() {
    const response = await getAllMessages();
    // const response = await fetch('https://address.com/api/messages');

    console.log(response);
    setMessages(response);
  }

  async function getUsers() {
    const response = await getAllUsers();
    // const response = await fetch('https://address.com/api/messages');

    console.log(response);
    setUsers(response);
  }

  useEffect(() => {
    getMessages();
    getUsers();
  }, []);

  const userId =
    users.length > 0 ? users.filter((user) => user.isMe)[0].id : undefined;

  if (!userId) return null;

  return <ChatBody messages={messages} userId={userId} users={users} />;
}
