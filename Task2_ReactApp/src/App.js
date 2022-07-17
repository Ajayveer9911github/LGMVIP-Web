import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    // const res = await fetch("https://reqres.in/api/users");
    // I didn't use above data because it was giving 'users.map is not a function' error. Instead I used one which was used earlier in youtube tutorial.
    const res = await fetch("https://api.github.com/users");
    const jsonres = await res.json();
    setUsers(jsonres);
  };

  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Display</button>
      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login, node_id }) => (
          <li key={id}>
            Name: {login} | Node ID: {node_id}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
