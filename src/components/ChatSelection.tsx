import { UserI } from '../types/UserI';

type Props = {
  users: UserI[];
  userId: string;
  setContactId: (arg0: string) => void;
};

export default function ChatSelection({ users, userId, setContactId }: Props) {
  return (
    <select onChange={(e) => setContactId(e.target.value)}>
      {users
        .filter((user) => user.id !== userId)
        .map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
    </select>
  );
}
