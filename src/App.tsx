import "./App.css";
import { useGetUsers } from "./queries/users/user";

function App() {
  const { data, isLoading } = useGetUsers();

  return (
    <>
      {isLoading && <h1>...Loading Users</h1>}
      {data?.map((user) => (
        <h1 key={user.id}>Hi {user.firstName}</h1>
      ))}
    </>
  );
}

export default App;
