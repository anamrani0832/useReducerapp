import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  function handleClick() {
    navigation("dashboard/profile", { state: { username } });
  }
  return (
    <div>
      Homepage
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Go to the profile</button>
    </div>
  );
}

export default Homepage;
