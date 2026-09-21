import { useEffect, useMemo, useRef, useState } from "react";
import UserCard from "./cards/user.card";

const UserList = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  // let filterData;

  // if (!data) {
  //   return;
  // }

  // filterData = data?.filter((user) => {
  //   console.log(user.username);
  //   if (user.name.toLowerCase().includes(search.toLowerCase())) {
  //     return true;
  //   }
  // });
  const filterData = useMemo(() => {
    const res = data?.filter((user) => {
      console.log(user.username);
      if (user.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    });

    return res;
  }, [search, data]);
  console.log("user list ");

  useEffect(() => {
    inputRef.current.focus();
    // inputRef.current.style.border = "1px solid red";
    // inputRef.current.style.color = "red";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const users = await response.json();
        console.log("users", users);
        setData(users);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>User List</h1>
      <button
        onClick={() => {
          // inputRef.current.focus();
          setCount(count + 1);
        }}
      >
        Click {count}
      </button>

      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        ref={inputRef}
        name="search"
        placeholder="search..."
      />
      {isLoading && <p>Loading .....</p>}
      
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {!isLoading &&
          filterData?.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </>
  );
};

export default UserList;