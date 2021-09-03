import { MessageI } from '../types/MessageI';
import ChatMessageBubbleReceived from './ChatMessageBubbleReceived';
import ChatMessageBubbleSent from './ChatMessageBubbleSent';

type Props = {
  messages: MessageI[];
  userId: string;
  contactId: string;
};

export default function ChatMessages({ messages, userId, contactId }: Props) {
  return (
    <div style={{ marginBottom: "66px" }}>
      {messages
        .filter(
          (message) =>
            message.recipientId === contactId || message.senderId === contactId
        )
        .sort(
          (messageOne, messageTwo) =>
            messageOne.timestamp - messageTwo.timestamp
        )
        .map((message) => {
          return message.senderId === userId ? (
            <ChatMessageBubbleSent text={message.content} />
          ) : (
            <ChatMessageBubbleReceived text={message.content} />
          );
        })}
    </div>
  );
}
