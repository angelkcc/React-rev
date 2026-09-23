import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch.hook";

// context--same state if multiple components are using then we use context api
const UserContext = createContext({
  users: [],
  updateUsers: () => {},
});

// provider
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <UserContext.Provider
      value={{
        users: data,
        updateUsers: setUsers,
        isLoading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };

export default UserProvider;