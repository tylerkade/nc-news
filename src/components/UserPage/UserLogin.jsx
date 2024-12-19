import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import { getUsers, getUsersByUsername } from "../../../api";

import "../../css/UserLogin.css";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((existingUsers) => {
        setIsLoading(false);
        setUsers(existingUsers);
      })
      .catch(() => {
        setIsLoading(false);
        setUsers([]);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = users.some((user) => {
      return user.username === username;
    });
    if (!exists) {
      setErrorMsg("User doesn't exist");
      return;
    }
    getUsersByUsername(username).then((data) => {
      setErrorMsg("");
      loginUser(data);
      navigate("/");
    });
  };

  return (
    <section className="login">
      <h2 id="login-heading">Sign in to access your account</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          autoComplete="username"
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
        />
        {/* <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        /> */}
        {errorMsg ? <p className="error">{errorMsg}</p> : null}
        <section id="login-buttons">
          <button type="submit" disabled={!username}>
            {" "}
            {/* || !password}> */}
            Login
          </button>
          {/* <button type="submit" disabled={!username || !password}>
            Register
          </button> */}
        </section>
      </form>
      <p>Valid usernames:</p>
      {isLoading ? <>Loading Valid usernames...</> : <></>}
      {users.map((user) => {
        return <li key={user.username}>{user.username}</li>;
      })}
    </section>
  );
};

export default UserLogin;
