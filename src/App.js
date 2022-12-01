import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Olivia" },
  { id: "u2", name: "Liam" },
  { id: "u3", name: "Emma" },
  { id: "u4", name: "Noah" },
  { id: "u5", name: "Amelia" },
  { id: "u6", name: "Oliver" },
  { id: "u7", name: "Ava" },
  { id: "u8", name: "James" },
  { id: "u9", name: "Daniel" },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
