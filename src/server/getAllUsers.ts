const data = [
  { name: "Aki", id: "4S22XW6mkDZZLwAwTiVT" },
  { name: "Rina", id: "PJ7ZjTQdWXzWZJX2crse" },
  { admin: true, name: "Mateusz", id: "V1VIpt9WPGh802xklzQcfthJsoe2" },
  { name: "Soren", isMe: true, id: "gqbWCMT0a0PnwCuETCRs" },
];

export default async function getAllUsers() {
  return data;
}
