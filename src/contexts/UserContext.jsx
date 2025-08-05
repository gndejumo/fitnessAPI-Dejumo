import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const login = (token, userInfo) => {
    localStorage.setItem('token', token);
    setUser(userInfo);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setToken('');
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}