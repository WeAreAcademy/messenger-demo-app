import { useEffect, useState } from 'react';

import { MessageI } from '../types/MessageI';
import { UserI } from '../types/UserI';

import ChatBody from './ChatBody';

export default function Chat() {
  const [messages, setMessages] = useState<MessageI[]>([]);
  const [users, setUsers] = useState<UserI[]>([]);

  async function getMessages() {
    const response = await fetch("http://localhost:4000/messages");
    setMessages(await response.json());
  }

  async function getUsers() {
    const response = await fetch("http://localhost:4000/users");
    setUsers(await response.json());
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
