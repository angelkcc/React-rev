import { Link } from "react-router";
import CardWrapper from "./wrapper.card";

const UserCard = ({
  user: {
    name,
    email,
    username,
    address,
    id,
  },
}) => {
  // let obj = {
  //   name: "abc",
  // };

  return (
    <Link to ={`/users.${id}`}>
    <CardWrapper>
      <div>
        <p>Name: {name}</p>
        <p>Username : {username}</p>
        <p>Email: {email}</p>
        {/* <p>{obj}</p> */}
        {/* <p>Skills: {skills?.join(",") ?? ""}</p> */}
        <p>Address: {address?.street}, {address?.city}</p>
      </div>
    </CardWrapper>
    </Link>
  );
};

export default UserCard;

// A -> B  -> C

//A ->B ->C A can never pass prop directly to C. So, A can pass prop to B and B can pass prop to C. 
// This is called prop drilling. 