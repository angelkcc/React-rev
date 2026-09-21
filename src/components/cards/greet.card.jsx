//guest is a default value for name
const Greet = ({ name="Guest" }) => {
    console.log(name);
    //let { name } = props; //local variable so that we can change the value of name
    //doing this, we are not changing the value of props.name, we are just creating a local variable name and assigning the value of props.name to it. So, we can change the value of name without changing the value of props.name
    //name="Guest";
    return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
};
export default Greet;
