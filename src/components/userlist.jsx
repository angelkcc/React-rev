import { useContext, useMemo, useRef, useState } from "react";
import UserCard from "./cards/user.card";
import { UserContext } from "./contexts/user.context";

const UserList = () => {
  const { users, isLoading, error } = useContext(UserContext);

  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  const filterData = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <>
      <h1>User List</h1>

      <button onClick={() => setCount(count + 1)}>
        Click {count}
      </button>

      <input
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search..."
      />

      {isLoading && <p>Loading.....</p>}

      {error && <p>Error fetching users</p>}

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {!isLoading &&
          filterData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
    </>
  );
};

export default UserList;