import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "AnhVuNguyen",
        email: "anhvunguyen@abc.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <div className="btn-login">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>User name is: {userContext.user?.name}</h2>
      <h2>User email is: {userContext.user?.email}</h2>
    </div>
  );
};
