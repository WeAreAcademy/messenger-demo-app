import styles from './ChatMessageBubbleSent.module.css';

interface Props {
  text: string;
}

export default function ChatMessageBubbleSent(props: Props) {
  return (
    <div className={styles.message}>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}
