import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashborad() {
  return (
    <div>
      Dashborad
      <li>
        <Link to="profile">Profile</Link>
      </li>
      <li>
        <Link to="setting">Setting</Link>
      </li>
      <Outlet />
    </div>
  );
}

export default Dashborad;
