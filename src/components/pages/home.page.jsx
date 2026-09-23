import "../../App.css";

import UserCard from "../cards/user.card";
import Greet from "../cards/greet.card";
import ProductCard from "../cards/product.card";
import { Button } from "../buttons/button";
import Counter from "../counter";
import Register from "../forms/register.form";
import Login from "../forms/login.form";
import CountProvider from "../contexts/counter.context";
import useFetch from "../hooks/useFetch.hook";
import NavBar from "../inputs/nav-bar";

function HomePage() {

  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const onLoginClick = () => {
    console.log("Login clicked");
  };

  const onRegClick = () => {
    console.log("Register clicked");
  };

  return (
    <>
      <h1>Home Page</h1>
      <NavBar />
      <Greet />

      <ProductCard />

      <Button label="Login" onClick={onLoginClick} />
      <Button label="Register" onClick={onRegClick} />

      <CountProvider>
        <Counter />
      </CountProvider>

      <Register />

      <Login />

      {isLoading && <p>Loading.....</p>}

      {error && <p>Error fetching users</p>}

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {!isLoading &&
          data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
    </>
  );
}

export default HomePage;