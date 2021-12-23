import React, { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const LoggedIn = (): JSX.Element => {
  // const [user, setUser] = useState<AuthUser | null>(null); // trường hợp state là null
  const [user, setUser] = useState<AuthUser>({
    name: 'Guest',
    email: 'guest@example.com',
  }); // trường hợp state là AuthUser
  const handleLogin = () => {
    setUser({
      name: 'Anhvu',
      email: 'anhvu@example.com',
    });
  };

  const handleLogout = () => {
    setUser({
      name: 'Guest',
      email: 'guest@example.com',
    });
  };
  return (
    <>
      <div className="btn-login">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {/* trường hợp state là null */}
      {/* <h2>User name is {user?.name}</h2>
      <h2>User name is {user?.email}</h2> */}

      {/* trường hợp state là AuthUser */}
      <h2>User name is {user.name}</h2>
      <h2>User name is {user.email}</h2>
    </>
  );
};
