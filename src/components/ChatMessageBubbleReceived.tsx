import styles from './ChatMessageBubbleReceived.module.css';

interface Props {
  text: string;
}

export default function ChatMessageBubbleReceived(props: Props) {
  return (
    <div className={styles.message}>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
