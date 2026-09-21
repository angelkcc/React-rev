import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Login");

  const handleEmailChange = (e) => {
    console.log("email changed");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log("password changed");
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted");
    console.log("Email:", email);
    console.log("Password:", password);

    // post req -> /api/auth/login
    // body -> { email: email, password: password }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>

      <input
        id="email"
        type="email"
        required
        placeholder="enter your email"
        onChange={handleEmailChange}
      />

      <br />

      <label htmlFor="password">Password</label>

      <input
        id="password"
        type="password"
        required
        placeholder="enter your password"
        onChange={handlePasswordChange}
      />

      <br />

      <button type="submit">Login</button>

      <button type="reset">Reset</button>
    </form>
  );
};

export default Login;