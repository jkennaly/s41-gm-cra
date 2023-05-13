import React from 'react';
import { useAuth } from '../auth/auth';
import { useSelector } from 'react-redux';
import menuItems from './menu/menuItems.json';

const AppShell = () => {
  const { login, logout, userId, handleAuthentication } = useAuth();
  console.log('AppShell loc', window.location.href)
  if(window.location.href.query) handleAuthentication();
  const user = useSelector((state) => state.auth.user);
  const authId = userId()

  return (
    <div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        {!authId && (
          <div>
            <button onClick={login}>Log In</button>
            <button onClick={login}>Sign Up</button>
          </div>
        )}

        {authId && (
          <div>
            <button onClick={logout}>Log Out</button>
            {user && <img src={user.picture} alt="Profile" />}
          </div>
        )}
      </div>

      {/* Render children components here */}
    </div>
  );
};

export default AppShell;
