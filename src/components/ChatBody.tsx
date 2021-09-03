import { useState } from 'react';

import { MessageI } from '../types/MessageI';
import { UserI } from '../types/UserI';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatSelection from './ChatSelection';

type Props = {
  messages: MessageI[];
  users: UserI[];
  userId: string;
};

export default function ChatBody({ messages, userId, users }: Props) {
  const [contactId, setContactId] = useState("");
  console.log(contactId);

  return (
    <>
      <ChatSelection
        users={users}
        userId={userId}
        setContactId={setContactId}
      />
      <ChatMessages messages={messages} userId={userId} contactId={contactId} />
      <ChatInput userId={userId} />
    </>
  );
}
