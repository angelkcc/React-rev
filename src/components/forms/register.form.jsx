import { useState } from "react";
import CardWrapper from "../cards/wrapper.card";
// controlled vs uncontrolled component ->
// input change + validation + submission + integration
const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const handleNameChange = (e) => {
  //   console.log("input changed");
  //   // console.log(e.target.value);
  //   // const name = e.target.value;
  //   // setName(name);
  //   // {name,email,password} => {name:'asdfg'}
  //   setFormData({
  //     ...formData,
  //     name: e.target.value,
  //   });
  // };

  //{name:'asdfg'} => {email:''agshdbshdj}
  // const handleEmailChange = (e) => {
  //   // setEmail(e.target.value);
  //   setFormData({
  //     ...formData,
  //     email: e.target.value,
  //   });
  // };

  //{email:''agshdbshdj}  => {password:''123456}
  // const handlePasswordChange = (e) => {
  //   // setPassword(e.target.value);
  //   setFormData({
  //     ...formData,
  //     password: e.target.value,
  //   });
  // };

  const handleChange = (e) => {
    // value
    // console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    setNameError("");
    setEmailError("");
    setPasswordError("");
    if (!name.trim()) {
      console.log("name is required");
      setNameError("name is required");
      return;
    }
    if (!email.trim()) {
      console.log("email is required");
      setEmailError("email is required");
      return;
    }
    if (!password.trim()) {
      console.log("password is required");
      setPasswordError("password is required");
      return;
    }
    if (password.length < 6) {
      setPasswordError("at least 6 char. required");
    }
    // const data = { name, email, password };
    console.log("form submitted", formData);
    // post req -> /api/auth/register -> body {name:'' , email:''}
    //! api integration
    fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <CardWrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          // onChange={handleNameChange}
          onChange={handleChange}
          value={formData.name}
          name="name"
          id="name"
          placeholder="enter your name"
        />
        <p>{nameError}</p>
        <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          // onChange={handleEmailChange}
          value={formData.email}
          type="email"
          placeholder="enter your email"
        />
        <p>{emailError}</p>
        <br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          // onChange={handlePasswordChange}
          value={formData.password}
          placeholder="enter your password"
        />
        <p>{passwordError}</p>
        <br />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </CardWrapper>
  );
};

export default Register;